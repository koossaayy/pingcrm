<template>
  <div>
    <Head :title="$t('Dashboard')" />
    <h1 class="mb-8 text-3xl font-bold">{{ $t('Dashboard') }}</h1>
    <p class="mb-8 leading-normal">{{ $t('Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how') }} <a class="text-indigo-500 hover:text-orange-600 underline" href="https://inertiajs.com">Inertia.js</a> {{ $t('works.') }}</p>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  components: {
    Head,
  },
  layout: Layout,
}
</script>
