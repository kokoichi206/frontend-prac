<template>
  <Header />
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
  <Footer class="footer" />
</template>

<style scoped>
div {
  margin: 30px auto;
  max-width: 650px;
  text-align: center;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
