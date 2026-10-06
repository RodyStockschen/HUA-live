<script setup>
import { useIntroStore } from '@/stores/intro'
import { useLangStore } from '@/stores/lang'

const intro = useIntroStore()
const lang = useLangStore()

function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    intro.sluit()
  }
}
</script>

<template>
  <div v-if="intro.visible" class="intro-overlay" @click="handleOverlayClick">
    <div class="intro-modal">
      <button class="intro-close" type="button" :aria-label="lang.t('intro.closeAria')" @click="intro.sluit">×</button>

      <h2>{{ lang.t('intro.title') }}</h2>
      <ul>
        <li v-for="(item, i) in lang.t('intro.items')" :key="i">{{ item }}</li>
      </ul>

      <hr />

      <h3>{{ lang.t('intro.colofonTitle') }}</h3>
      <p v-html="lang.t('intro.colofonBody')"></p>
      <p>
        <strong>{{ lang.t('intro.catalogusLabel') }}</strong> 135001<br />
        <strong>{{ lang.t('intro.dateringLabel') }}</strong> {{ lang.t('intro.dateringValue') }}
      </p>
      <p>
        <strong>{{ lang.t('intro.auteursrechtLabel') }}</strong> {{ lang.t('intro.auteursrechtValue') }}
      </p>
      <button class="intro-ok" type="button" @click="intro.sluit">{{ lang.t('intro.ok') }}</button>
    </div>
  </div>
</template>
