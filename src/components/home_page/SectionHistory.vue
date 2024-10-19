<template>
  <section>
    <div class="top-content">
      <h2>История компании</h2>
      <p>
        История компании начинается 14 января 1999 года, когда было образовано
        ООО «Чижи». Идея пришла, т.к. у основателя компании Прозор Жанны
        Георгиевны была собака боксёр по кличке Бард…
      </p>
      <span class="read-more"
        ><router-link to="/history">Читать далее</router-link></span
      >
    </div>
    <div class="bot-content">
      <h2>Наши специалисты</h2>
      <div class="swiper">
        <button>--</button>
        <img src="/src/assets/image/history.png" alt="" />
        <img src="/src/assets/image/history.png" alt="" />
        <img src="/src/assets/image/history.png" alt="" />
        <img src="/src/assets/image/history.png" alt="" />
        <img src="/src/assets/image/history.png" alt="" />
        <img src="/src/assets/image/history.png" alt="" />
        <button>></button>
      </div>
      <span class="read-more">Посмотреть всех > </span>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";
section {
  background-color: $gray-bg-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 90px;
  padding-top: 90px;

  .top-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 480px;
    margin-bottom: 80px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 40px;
  }
  p {
    font-size: 20px;
    font-style: italic;
  }
  .bot-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

.read-more {
  position: relative;
  font-size: 20px;
  color: $orange-color;
  font-style: italic;

  &::after {
    content: "";
    border-top: 1px solid $orange-color;
    border-right: 1px solid $orange-color;
    display: block;
    position: absolute;
    left: 140px;
    bottom: 8px;
    width: 7px;
    height: 7px;
    padding-left: 5px;
    color: $orange-color;
    transform: rotate(45deg);
  }
}
.swiper {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    margin-right: 10px;
  }

  button {
    margin-right: 10px;
  }
}
</style>
