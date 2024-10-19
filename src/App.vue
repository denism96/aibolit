<template>
  <div class="app-content">
    <HeaderApp></HeaderApp>
    <main>
      <router-view></router-view>
    </main>
    <FooterApp></FooterApp>
  </div>
</template>
<script setup>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
</script>
<style lang="scss" scoped>
.app-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
