<script>
import { cardsCatalog } from "../../storage/cardsCatalog";
export default {
  data() {
    return {
      id: this.$route.params.id,
      cardsCatalog,
    };
  },
};
</script>
<template>
  <div class="content" v-if="cardsCatalog[id - 1].id == id">
    <h2>{{ cardsCatalog[id - 1].name }}</h2>
  </div>
</template>
