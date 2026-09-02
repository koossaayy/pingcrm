<template>
  <div>
    <Head :title="$t('Reports')" />
    <h1 class="mb-8 text-3xl font-bold">{{ $t('Reports') }}</h1>
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
