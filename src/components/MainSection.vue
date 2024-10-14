<script setup lang="ts">
import SocialLink from "./social/SocialLink.vue";
import AppTabs from "./AppTabs.vue";
import { ref } from "vue";
const tabs = [
  {
    name: "1",
    label: "Айболит круглосуточная ветклиника",
    image: "/src/assets/image/tabs/cat_dog.png",
    imageAlt: "Кот с собакой",
  },
  {
    name: "2",
    label: "Комфортные оборудованные стационары",
    image: "/src/assets/image/tabs/doctor.png",
    imageAlt: "Собака облизывает доктора",
  },
  {
    name: "3",
    label: "Новейшее европейское оборудование",
    image: "/src/assets/image/tabs/dog_doctor.png",
    imageAlt: "Собака доктор",
  },
  {
    name: "4",
    label: "Собственная современная лаборатория",
    image: "/src/assets/image/tabs/rabbit.png",
    imageAlt: "Кролик",
  },
  {
    name: "5",
    label: "Аптека и зоомагазин по доступным ценам ",
    image: "/src/assets/image/tabs/cat_with_tongue.png",
    imageAlt: "Кошка показывает язык",
  },
  {
    name: "6",
    label: "Груминг салон и косметические товары",
    image: "/src/assets/image/tabs/dogs.png",
    imageAlt: "Собаки той терьеры",
  },
];

const selectedTab = ref(tabs[0].name);

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <section>
    <AppTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    </AppTabs>
    <div class="center-content">
      <div v-for="tab in tabs" :key="tab.name">
        <h1 v-if="selectedTab === tab.name">{{ tab.label }}</h1>
        <div v-if="selectedTab === tab.name">
          <img class="dog-image" :src="tab.image" :alt="tab.imageAlt" />
        </div>
      </div>
      <button>Записаться</button>
      <SocialLink></SocialLink>
    </div>
    <div class="right-content">
      <p>8 121 909 00 00</p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";
section {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 80px;
  height: 786px;
}
.center-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 120px;

  h1 {
    font-size: 80px;
    max-width: 645px;
    line-height: 80px;
  }
  button {
    background-color: $orange-color;
    padding: 10px 40px;
    border-radius: 30px;
    color: $white-color;
    margin-top: 30px;
    max-width: 284px;
  }
}
.right-content {
  position: relative;
  width: 833px;
  height: 100%;

  .dog-image {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .cat-image {
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
  p {
    position: absolute;
    bottom: 50px;
    right: 40px;
  }
}
</style>
