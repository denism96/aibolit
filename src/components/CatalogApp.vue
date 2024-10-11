<template>
<section class="catalog ">
    <article>
    <h3>Терапия</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/terapy.svg" alt="Картинка направления">
</article>
<article>
    <h3>Хирургия</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/hirurg.svg" alt="Картинка направления">
</article>
<article>
    <h3>Неврология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/nevrolog.svg" alt="Картинка направления">
</article>
<article>
    <h3>Ортопедия</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/ortoped.svg" alt="Картинка направления">
</article>
<article>
    <h3>Дерматология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/dermatolog.svg" alt="Картинка направления">
</article>
<article>
    <h3>Офтальмология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/oftalmolog.svg" alt="Картинка направления">
</article>
<article>
    <h3>Кардиология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/cargio.svg" alt="Картинка направления">
</article>
<article>
    <h3>Стоматология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/stomatolog.svg" alt="Картинка направления">
</article>
<article>
    <h3>Репродуктология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/reproduct.svg" alt="Картинка направления">
</article>
<article>
    <h3>Визуальная диагностика</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/visual.svg" alt="Картинка направления">
</article>
<article>
    <h3>Лаборатория</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/laboratory.svg" alt="Картинка направления">
</article>
<article>
    <h3>Онколония</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/onkolog.svg" alt="Картинка направления">
</article>
<article>
    <h3>Эндокринология</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/endocr.svg" alt="Картинка направления">
</article>
<article>
    <h3>Экзотические животные</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/ekzotic.svg" alt="Картинка направления">
</article>
<article>
    <h3>Аптека</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/apteka.svg" alt="Картинка направления">
</article>
<article>
    <h3>Груминг</h3>
    <small>26 услуг</small>
    <img src="/src/assets/image/catalog/grooming.svg" alt="Картинка направления">
</article>
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

    article {
        position:relative;
        width: 320px;
        height: 220px;
        margin-bottom: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow:0px 0px 18px -3px #aaa;
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
}
</style>