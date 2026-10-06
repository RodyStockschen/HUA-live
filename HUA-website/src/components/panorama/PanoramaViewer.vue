<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import Hotspot from './Hotspot.vue'
import PolygonHotspot from './PolygonHotspot.vue'
import InfoPanel from './InfoPanel.vue'
import Minimap from './Minimap.vue'
import IntroOverlay from './IntroOverlay.vue'
import PanoramaControls from './PanoramaControls.vue'
import { useIntroStore } from '@/stores/intro'

const props = defineProps({
  artikelen: { type: Array, required: true },
})

const intro = useIntroStore()
const containerRef = ref(null)
const scrollerRef = ref(null)

const activeArtikel = ref(null)
const waypointsVisible = ref(true)
const isPlaying = ref(false)
const currentZoom = ref(1)

const minZoom = 1
const maxZoom = 3
const zoomStep = 0.3
const scrollAmount = 300

// De fotostrip (.panorama-fotos-track) wordt geschaald via CSS `zoom` (een echte layout-schaal,
// in tegenstelling tot transform:scale dat alleen tekent) zodat .panorama-fotos — de vaste,
// scrollbare "kijkvensters" eromheen — daadwerkelijk méér scrollbare ruimte krijgt naarmate je
// verder inzoomt. Zo kun je met scrollen/slepen de hele leperello bereiken, niet alleen het stukje
// dat al zichtbaar was toen je inzoomde (CSS overflow-clipping gebeurt namelijk vóór een transform
// wordt toegepast, dus die eerdere aanpak liet je nooit buiten de oorspronkelijk zichtbare foto's).
const fsZoom = ref(1)
// Alleen een zoom-stijl toevoegen als er echt wordt in-/uitgezoomd. Sommige browsers (o.a.
// Safari) behandelen een expliciet gezette `zoom: 1` net iets anders dan helemaal geen zoom —
// wat bij normaal browsen (geen zoom actief) tot rendering-problemen kon leiden.
const trackStyle = computed(() => {
  const z = fsZoom.value * currentZoom.value
  return z === 1 ? {} : { zoom: z }
})

const zoomClass = computed(() => (currentZoom.value !== 1 ? 'zoomed' : ''))

// Slepen om rond te kijken zodra ingezoomd (bv. na klikken op +): gewoon scrollLeft/scrollTop op
// het (niet-gezoomde) buitenste element, dat nu echt méér inhoud te scrollen heeft. Geen deling
// door de zoomfactor nodig — scrollLeft/scrollTop zitten al in normale schermpixels. Onder de
// PAN_THRESHOLD telt het als een gewone klik (voor hotspots).
const panState = ref(null)
const PAN_THRESHOLD = 4

function onPanMouseDown(event) {
  if (currentZoom.value <= 1 || event.button !== 0) return
  const el = scrollerRef.value
  if (!el) return
  event.preventDefault()
  // CSS scroll-behavior:smooth laat elke scrollLeft/scrollTop-toewijzing animeren; bij snelle
  // muisbewegingen wordt die animatie steeds afgebroken door de volgende toewijzing vóórdat hij
  // ergens komt, waardoor het slepen leek vast te lopen (en een daaropvolgende zoom-out dus vanaf
  // een verkeerde positie verder rekende). Tijdens het slepen dus instant scrollen.
  el.style.scrollBehavior = 'auto'
  panState.value = {
    startX: event.clientX,
    startY: event.clientY,
    scrollLeft: el.scrollLeft,
    scrollTop: el.scrollTop,
    moved: false,
  }
}

function onPanMouseMove(event) {
  if (!panState.value) return
  const el = scrollerRef.value
  if (!el) return
  const dx = event.clientX - panState.value.startX
  const dy = event.clientY - panState.value.startY
  if (!panState.value.moved) {
    if (Math.hypot(dx, dy) < PAN_THRESHOLD) return
    panState.value.moved = true
    el.classList.add('is-panning')
  }
  event.preventDefault()
  el.scrollLeft = panState.value.scrollLeft - dx
  el.scrollTop = panState.value.scrollTop - dy
}

function onPanMouseUp() {
  // Deze listener zit op document en vuurt dus bij élke klik (ook op de snelheidsknoppen).
  // Zonder deze check werd scroll-behavior dan teruggezet naar smooth terwijl play liep,
  // waardoor elke scrollLeft-stap een afgebroken smooth-animatie werd en de snelheid vastliep.
  if (!panState.value) return
  const el = scrollerRef.value
  if (panState.value.moved) {
    el?.classList.remove('is-panning')
    stopPlay()
  }
  if (el) el.style.scrollBehavior = ''
  panState.value = null
}

// Zoomt in/uit met een vast focuspunt (het scherm-coördinaat px,py) dat op zijn plek blijft
// staan — net als op Google Maps. contentX/contentY is de positie van dat punt in de
// ongezoomde inhoud; na de zoomwijziging herstellen we scrollLeft/scrollTop zodat datzelfde
// inhoudspunt weer precies onder px,py staat. fsZoom staat hier los van (valt weg in de som).
function zoomFocusedTo(newZoom, px, py) {
  const el = scrollerRef.value
  const oldZoom = currentZoom.value
  if (!el || newZoom === oldZoom) {
    currentZoom.value = newZoom
    return
  }
  const contentX = (el.scrollLeft + px) / oldZoom
  const contentY = (el.scrollTop + py) / oldZoom
  currentZoom.value = newZoom
  nextTick(() => {
    const prevBehavior = el.style.scrollBehavior
    el.style.scrollBehavior = 'auto'
    el.scrollLeft = contentX * newZoom - px
    el.scrollTop = contentY * newZoom - py
    el.style.scrollBehavior = prevBehavior
  })
}

function selectHotspot(artikel) {
  activeArtikel.value = artikel
}

function closeInfo() {
  activeArtikel.value = null
}

function scrollLeft() {
  stopPlay()
  scrollerRef.value?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
}

function scrollRight() {
  stopPlay()
  scrollerRef.value?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}

function zoomIn() {
  const el = scrollerRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  zoomFocusedTo(Math.min(maxZoom, currentZoom.value + zoomStep), rect.width / 2, rect.height / 2)
}

function zoomOut() {
  const el = scrollerRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  zoomFocusedTo(Math.max(minZoom, currentZoom.value - zoomStep), rect.width / 2, rect.height / 2)
}

function onDoubleClick(event) {
  const el = scrollerRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const px = event.clientX - rect.left
  const py = event.clientY - rect.top
  zoomFocusedTo(currentZoom.value === 1 ? 2 : 1, px, py)
}

function toggleFullscreen() {
  const container = containerRef.value
  if (!container) return
  if (!document.fullscreenElement) {
    container.requestFullscreen?.()?.catch((err) => console.error('Volledig scherm mislukt:', err))
  } else {
    document.exitFullscreen?.()?.catch((err) => console.error('Volledig scherm verlaten mislukt:', err))
  }
}

// Natuurlijke fotohoogte in de normale weergave (zie --panorama-foto-height in main.css).
// De hele strip (met alle margin_left/margin_top afstanden uit de CMS) wordt in fullscreen op
// deze verhouding opgeschaald (via fsZoom, zie trackStyle hierboven), zodat een foto met de
// neutrale margin_top (100, zie translateY in main.css) precies de volledige schermhoogte vult
// en de foto's onderling evenredig blijven aansluiten zoals in de leperello.
const FOTO_REF_HEIGHT = 665

function updateFsZoom() {
  fsZoom.value = document.fullscreenElement ? window.innerHeight / FOTO_REF_HEIGHT : 1
}

function onFullscreenChange() {
  updateFsZoom()
}

function toggleWaypoints() {
  waypointsVisible.value = !waypointsVisible.value
}

let rafId = null
let lastTimestamp = null
let scrollAccumulator = 0
const BASE_SPEED = 300
const MIN_SPEED = 100
const MAX_SPEED = 900
const SPEED_STEP = 100
const playSpeed = ref(BASE_SPEED)
const speedLabel = computed(() => `${(playSpeed.value / BASE_SPEED).toFixed(1)}×`)

function increaseSpeed() {
  playSpeed.value = Math.min(MAX_SPEED, playSpeed.value + SPEED_STEP)
}

function decreaseSpeed() {
  playSpeed.value = Math.max(MIN_SPEED, playSpeed.value - SPEED_STEP)
}

function step(timestamp) {
  const el = scrollerRef.value
  if (!isPlaying.value || !el) return

  if (!lastTimestamp) lastTimestamp = timestamp
  let deltaSec = (timestamp - lastTimestamp) / 1000
  deltaSec = Math.min(deltaSec, 0.1)
  lastTimestamp = timestamp

  const maxScroll = el.scrollWidth - el.clientWidth

  scrollAccumulator += playSpeed.value * deltaSec
  const wholePixels = Math.floor(scrollAccumulator)
  scrollAccumulator -= wholePixels

  if (wholePixels > 0) {
    el.scrollLeft += wholePixels
  }

  if (el.scrollLeft >= maxScroll) {
    el.scrollLeft = maxScroll
    stopPlay()
    return
  }

  rafId = requestAnimationFrame(step)
}

function startPlay() {
  const el = scrollerRef.value
  if (!el) return
  isPlaying.value = true
  lastTimestamp = null
  scrollAccumulator = 0
  el.style.scrollBehavior = 'auto'
  rafId = requestAnimationFrame(step)
}

function stopPlay() {
  isPlaying.value = false
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  const el = scrollerRef.value
  if (el) el.style.scrollBehavior = ''
}

function togglePlay() {
  if (isPlaying.value) {
    stopPlay()
  } else {
    startPlay()
  }
}

function onUserInteraction() {
  if (isPlaying.value) stopPlay()
}

function onDocumentClick(event) {
  if (!activeArtikel.value) return
  const path = event.composedPath?.() ?? []
  const insidePanel = path.some(
    (el) =>
      el?.classList?.contains?.('panorama-info-panel') ||
      el?.classList?.contains?.('point-wrapper') ||
      el?.classList?.contains?.('hotspot-polygon') ||
      el?.classList?.contains?.('hotspot-polygon__shape'),
  )
  if (!insidePanel) closeInfo()
}

onMounted(() => {
  const el = scrollerRef.value
  if (el) {
    el.addEventListener('mousedown', onUserInteraction)
    el.addEventListener('touchstart', onUserInteraction, { passive: true })
  }
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('fullscreenchange', onFullscreenChange)
  window.addEventListener('resize', updateFsZoom)
  document.addEventListener('mousemove', onPanMouseMove)
  document.addEventListener('mouseup', onPanMouseUp)
})

onUnmounted(() => {
  stopPlay()
  const el = scrollerRef.value
  if (el) {
    el.removeEventListener('mousedown', onUserInteraction)
    el.removeEventListener('touchstart', onUserInteraction)
  }
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
  document.removeEventListener('mousemove', onPanMouseMove)
  document.removeEventListener('mouseup', onPanMouseUp)
  window.removeEventListener('resize', updateFsZoom)
})
</script>

<template>
  <div ref="containerRef" class="panorama" :class="{ 'waypoints-off': !waypointsVisible }">
    <div class="panorama-content">
      <div
        ref="scrollerRef"
        class="panorama-fotos"
        :class="zoomClass"
        @dblclick="onDoubleClick"
        @mousedown="onPanMouseDown"
      >
        <div class="panorama-fotos-track" :style="trackStyle">
          <div
            v-for="artikel in artikelen"
            :key="artikel.id"
            class="panorama-img-wrapper"
            :style="{
              zIndex: artikel.z_index,
              marginLeft: `${artikel.margin_left ?? 0}px`,
              marginTop: `${Math.max(-50, Math.min(175, artikel.margin_top ?? 100))}px`,
            }"
          >
            <img
              :src="artikel.afbeelding?.startsWith('data:') ? artikel.afbeelding : `/img/${artikel.afbeelding}`"
              :alt="artikel.alt"
              draggable="false"
            />
            <PolygonHotspot
              v-if="(Array.isArray(artikel.polygons) && artikel.polygons.length > 0) || Array.isArray(artikel.polygon)"
              :artikel="artikel"
              @select="selectHotspot"
            />
            <Hotspot
              v-if="artikel.x !== null && artikel.y !== null"
              :artikel="artikel"
              @select="selectHotspot"
            />
          </div>
        </div>
      </div>

      <PanoramaControls
        :waypoints-visible="waypointsVisible"
        :is-playing="isPlaying"
        :speed-label="speedLabel"
        @zoom-in="zoomIn"
        @zoom-out="zoomOut"
        @fullscreen="toggleFullscreen"
        @open-intro="intro.open"
        @toggle-waypoints="toggleWaypoints"
        @toggle-play="togglePlay"
        @speed-up="increaseSpeed"
        @speed-down="decreaseSpeed"
      />

      <button class="panorama-arrow panorama-arrow-left" type="button" aria-label="Scroll naar links" @click="scrollLeft">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button class="panorama-arrow panorama-arrow-right" type="button" aria-label="Scroll naar rechts" @click="scrollRight">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <Minimap :scroll-container="scrollerRef" :count="artikelen.length" />

      <InfoPanel :artikel="activeArtikel" @close="closeInfo" />
    </div>

    <IntroOverlay />
  </div>
</template>
