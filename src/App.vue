<template>
  <HeaderApp></HeaderApp>
  <router-view></router-view>
  <FooterApp></FooterApp>
</template>
<script setup>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
</script>
