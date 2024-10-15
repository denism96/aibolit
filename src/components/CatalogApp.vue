<script setup>
import { cardsCatalog } from '../storage/cardsCatalog';
import CatalogArticle from './CatalogArticle.vue';
</script>
<template>
<section class="catalog " >
    <CatalogArticle :cards="cardsCatalog"></CatalogArticle>
</section>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/main.scss';
.catalog {
    display: flex;
    width: 1305px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 50px;


}
</style>