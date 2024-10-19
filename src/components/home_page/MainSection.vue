<script setup lang="ts">
import SocialLink from "../social/SocialLink.vue";
import AppTabs from "../AppTabs.vue";
import { ref } from "vue";
import { tabs } from "../../storage/tabs";

const selectedTab = ref(tabs[0].name);

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <section class="container first-section">
    <AppTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    </AppTabs>
    <div class="center-content">
      <div v-for="tab in tabs" :key="tab.name">
        <h1 v-if="selectedTab === tab.name">{{ tab.label }}</h1>
      </div>
      <button><router-link to="/record">Записаться</router-link></button>
      <SocialLink></SocialLink>
    </div>
    <div class="right-content">
      <div class="img-content" v-for="tab in tabs" :key="tab.name">
        <img
          v-if="selectedTab === tab.name"
          :src="tab.image"
          :alt="tab.imageAlt"
        />
      </div>
      <span>8 (121) 909 00 00</span>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

.first-section {
  position: relative;
  max-width: 1760px;
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
}

.center-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 610px;
}

h1 {
  font-size: 80px;
  line-height: 80px;
  margin-bottom: 60px;
}
button {
  background-color: $orange-color;
  padding: 10px 40px;
  border-radius: 30px;
  color: $white-color;
  margin-top: 30px;
  max-width: 284px;
  height: 67px;
  font-size: 30px;
  font-style: italic;
  box-shadow: 0px 0px 4px 4px $orange-color;
}
.right-content {
  position: relative;
  display: flex;
  justify-content: center;
  width: 926px;

  span {
    position: absolute;
    right: 50px;
    bottom: 50px;
    font-size: 24px;
    font-style: italic;
  }
}
</style>
