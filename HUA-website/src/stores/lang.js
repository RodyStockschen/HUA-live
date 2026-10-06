import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { translations } from '@/i18n/translations'

const STORAGE_KEY = 'panoramaLang'

function get(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export const useLangStore = defineStore('lang', () => {
  const stored = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY)
    } catch {
      return null
    }
  })()

  const current = ref(stored === 'en' ? 'en' : 'nl')

  function toggle() {
    current.value = current.value === 'nl' ? 'en' : 'nl'
    try {
      localStorage.setItem(STORAGE_KEY, current.value)
    } catch {
      // localStorage kan geblokkeerd zijn — negeren
    }
  }

  const dict = computed(() => translations[current.value])

  function t(path) {
    return get(dict.value, path) ?? path
  }

  return { current, toggle, t }
})
