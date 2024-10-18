<script setup>
import MainSection from "../components/home_page/MainSection.vue";
import SectionHistory from "../components/home_page/SectionHistory.vue";
import SectionCount from "../components/home_page/SectionCount.vue";
import SectionMobile from "../components/home_page/SectionMobile.vue";
import SectionContacts from "../components/home_page/SectionContacts.vue";
import SectionCatalog from "../components/home_page/SectionCatalog.vue";
</script>
<template>
  <MainSection></MainSection>
  <SectionCatalog></SectionCatalog>
  <SectionHistory></SectionHistory>
  <SectionCount></SectionCount>
  <SectionMobile></SectionMobile>
  <SectionContacts></SectionContacts>
</template>
