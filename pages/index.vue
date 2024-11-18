<template>
  <h1>Index page, {{ data }}</h1>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api')
useHead({
  title: 'Index',
  meta: [
    { name: 'description', content: 'nuxt index' }
  ]
})
</script>