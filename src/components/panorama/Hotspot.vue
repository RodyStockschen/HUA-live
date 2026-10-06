<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  artikel: { type: Object, required: true },
})

defineEmits(['select'])

const imgRef = ref(null)
const natural = ref({ width: 0, height: 0 })

function meet() {
  if (!imgRef.value) return
  natural.value = {
    width: imgRef.value.naturalWidth || imgRef.value.width,
    height: imgRef.value.naturalHeight || imgRef.value.height,
  }
}

onMounted(meet)
</script>

<template>
  <div
    v-if="natural.width > 0"
    class="point-hotspot-layer"
  >
    <div
      class="point-wrapper"
      :style="{
        top: `${(artikel.y / natural.height) * 100}%`,
        left: `${(artikel.x / natural.width) * 100}%`,
      }"
      :data-catalogus="artikel.catalogusnummer"
      @click.stop="$emit('select', artikel)"
    >
      <i></i>
    </div>
  </div>
  <img
    ref="imgRef"
    style="display: none;"
    :src="artikel.afbeelding?.startsWith('data:') ? artikel.afbeelding : `/img/${artikel.afbeelding}`"
    alt=""
    @load="meet"
  />
</template>

<style scoped>
/* Zelfde referentiekader als de polygon-hotspots: een laag ter grootte van de
   getoonde foto (var(--panorama-foto-height)), zodat x/y (opgeslagen in
   natuurlijke afbeeldingspixels, zie HotspotEditor.vue) via percentages altijd
   op de juiste plek belanden — ook bij zoomen of een andere fotohoogte. */
.point-hotspot-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--panorama-foto-height, 665px);
  pointer-events: none;
}

.point-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: auto;
}
</style>
