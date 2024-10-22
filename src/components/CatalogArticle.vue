<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <article v-for="card in cards" :key="card.id">
    <router-link :to="`/catalog/${card.id}`"
      ><h3>{{ card.name }}</h3></router-link
    >
    <small>26 услуг</small>
    <img :src="card.image" alt="Картинка направления" />
  </article>
</template>
<style lang="scss" scoped>
article {
  position: relative;
  width: 320px;
  height: 220px;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 18px -3px #aaa;
  border-radius: 30px;

  h3 {
    font-size: 30px;
  }

  small {
    font-size: 20px;
    font-style: italic;
  }

  img {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
</style>
