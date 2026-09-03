<script setup>
import { router, usePage } from '@inertiajs/vue3'

const page = usePage()
const current = () => page.props.locale ?? 'en'
const locales = () => page.props.locales ?? ['en', 'fr', 'es']

function switchTo(locale) {
  if (locale !== current()) router.get(`/locale/${locale}`)
}
</script>

<template>
  <select :value="current()" @change="switchTo($event.target.value)" aria-label="Language">
    <option v-for="locale in locales()" :key="locale" :value="locale">{{ locale.toUpperCase() }}</option>
  </select>
</template>