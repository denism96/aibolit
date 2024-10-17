<script setup>
defineProps({
  names: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["changeTab"]);

const clickOnTab = (tabName) => {
  emit("changeTab", tabName);
};
</script>
<template>
  <ul class="tab-nav">
    <li
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', { selected: tab.name === selectedTab }]"
      @click="clickOnTab(tab.name)"
    >
      {{ tab.name }}
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.tab-nav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 30px;
}
li {
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 20px;
  height: 30px;
}
.selected {
  border: 2px solid #000;
}
</style>
