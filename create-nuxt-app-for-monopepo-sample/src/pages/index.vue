<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>

<template>
  <h1>This is Nuxt template.</h1>
  <div>
    {{ data }}
  </div>
  <p>
    {{ $t('welcome') }}
  </p>
</template>
