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
  <div class="tab-nav">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', { selected: tab.name === selectedTab }]"
      @click="clickOnTab(tab.name)"
      >{{ tab.name }}
    </span>
  </div>
  <div class="tab-content"><slot /></div>
</template>
<style lang="scss" scoped>
span {
  margin-right: 30px;
  margin-bottom: 20px;
  display: block;
  width: 100px;
  height: 30px;
  background-color: red;
  cursor: pointer;
}
.selected {
  background-color: blue;
}
</style>
