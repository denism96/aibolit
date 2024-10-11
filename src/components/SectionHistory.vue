<template>
    <section>
        <div class="top-content">
            <h2>История компании</h2>
            <p>История компании начинается 14 января 1999 года, когда было образовано ООО «Чижи». Идея пришла, т.к. у основателя компании Прозор Жанны Георгиевны была собака боксёр по кличке Бард…</p>
            <span>Читать далее... ></span>
        </div>
        <div class="bot-content">
            <h2>Наши специалисты</h2>
            <div class="swiper">
                <button>--</button>
                <img src="/src/assets/image/history.png" alt="">
                <img src="/src/assets/image/history.png" alt="">
                <img src="/src/assets/image/history.png" alt="">
                <img src="/src/assets/image/history.png" alt="">
                <img src="/src/assets/image/history.png" alt="">
                <img src="/src/assets/image/history.png" alt="">
                <button>></button>
            </div>
            <span>Посмотреть всех > </span>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '/src/assets/styles/main.scss';
section {
    background-color: $gray-bg-color;
    display: flex;
    flex-direction:column;
    align-items: center;

    .top-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 480px;
    }

    .bot-content {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

   
}

.swiper {
        display: flex;
        align-items: center;

        img {
            margin-right: 10px;
        }

        button {
            margin-right: 10px;

        }
    }
</style>