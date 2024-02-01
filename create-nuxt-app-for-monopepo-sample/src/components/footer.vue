<script lang="ts" setup></script>

<template>
  <div>
    <button style="margin-right: 16px" @click="navigateTo('/')">Pien</button>
    <button style="margin-right: 16px" @click="navigateTo('/home')">
      Home
    </button>
    <button @click="navigateTo('/users/123')">User123</button>
  </div>
</template>

<style scoped></style>
