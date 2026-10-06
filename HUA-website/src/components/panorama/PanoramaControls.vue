<script setup>
import { useLangStore } from '@/stores/lang'

const lang = useLangStore()

defineProps({
  waypointsVisible: { type: Boolean, default: true },
  isPlaying: { type: Boolean, default: false },
  speedLabel: { type: String, default: '1.0×' },
})

defineEmits([
  'zoom-in',
  'zoom-out',
  'fullscreen',
  'open-intro',
  'toggle-waypoints',
  'toggle-play',
  'speed-up',
  'speed-down',
])
</script>

<template>
  <div class="panorama-controls">
    <button type="button" class="pano-btn pano-zoom-in" :aria-label="lang.t('controls.zoomIn')" @click.stop="$emit('zoom-in')">+</button>
    <button type="button" class="pano-btn pano-zoom-out" :aria-label="lang.t('controls.zoomOut')" @click.stop="$emit('zoom-out')">−</button>
    <button type="button" class="pano-btn pano-fullscreen" :aria-label="lang.t('controls.fullscreen')" @click.stop="$emit('fullscreen')">⤢</button>
    <button type="button" class="panorama-help-btn" :aria-label="lang.t('controls.help')" @click.stop="$emit('open-intro')">?</button>
    <button
      type="button"
      class="pano-btn pano-waypoints"
      :class="{ 'is-off': !waypointsVisible }"
      :aria-label="lang.t('controls.waypoints')"
      @click.stop="$emit('toggle-waypoints')"
    ></button>
    <div class="pano-play-wrap">
      <button
        type="button"
        class="pano-btn pano-play"
        :class="{ 'is-playing': isPlaying }"
        :aria-label="lang.t(isPlaying ? 'controls.pause' : 'controls.play')"
        @click.stop="$emit('toggle-play')"
      ></button>
      <div v-if="isPlaying" class="pano-speed">
        <button type="button" class="pano-speed__btn" aria-label="Langzamer" @click.stop="$emit('speed-down')">−</button>
        <span class="pano-speed__value">{{ speedLabel }}</span>
        <button type="button" class="pano-speed__btn" aria-label="Sneller" @click.stop="$emit('speed-up')">+</button>
      </div>
    </div>
  </div>
</template>
