<script setup>
import { useLangStore } from '@/stores/lang'

const lang = useLangStore()

defineProps({
  artikel: { type: Object, default: null },
})

defineEmits(['close'])

function imageUrl(artikel) {
  if (!artikel?.afbeelding) return ''
  return artikel.afbeelding.startsWith('data:') ? artikel.afbeelding : `/img/${artikel.afbeelding}`
}
</script>

<template>
  <div class="panorama-info-panel" :class="{ 'info-open': artikel !== null }">
    <button class="info-close" type="button" :aria-label="lang.t('infopanel.closeAria')" @click="$emit('close')"></button>
    <div v-if="artikel" class="info-content">
      <img
        v-if="artikel.afbeelding"
        :src="imageUrl(artikel)"
        :alt="artikel.title || ''"
        class="info-image"
      />

      <div v-if="artikel.title" class="info-section info-section--titel">
        <h3>{{ lang.t('infopanel.titel') }}</h3>
        <p class="info-title">{{ artikel.title }}</p>
      </div>

      <div class="info-section">
        <h3>{{ lang.t('infopanel.catalogusnummer') }}</h3>
        <p>{{ artikel.catalogusnummer || lang.t('infopanel.onbekend') }}</p>
      </div>

      <div class="info-section">
        <h3>{{ lang.t('infopanel.beschrijving') }}</h3>
        <p>{{ artikel.beschrijving || lang.t('infopanel.geenBeschrijving') }}</p>
      </div>

      <div v-if="artikel.link_bron" class="info-section">
        <h3>{{ lang.t('infopanel.meerInformatie') }}</h3>
        <p>
          <a :href="artikel.link_bron" target="_blank" rel="noopener noreferrer">
            {{ lang.t('infopanel.bekijken') }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
