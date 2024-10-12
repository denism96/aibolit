<template>
    <section>
        <div class="content">
            <h2>Удобное приложение для питомцев и их хозяев</h2>
            <img src="/src/assets/image/mobile/dog.png" alt="">
            <img class="phone" src="/src/assets/image/mobile/phone.png" alt="">
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/main.scss';

    section {
        width: 100%;
        background-color: $orange-color;
        height: 800px;
    }

    .content {
        position: relative;
        max-width: 1350px;
        width: 100%;
        margin: 0 auto;
        padding-top: 200px;
        border: 1px solid red;

        h2 {
            font-size:80px;
            color: $white-color;
            width: 826px;
        }

        .phone {
        right: -8%;
        bottom: -42%;
    }
        img {
            position: absolute;
            bottom: -46%;
            right: 11%;
        }
    }


</style>