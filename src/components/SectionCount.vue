<template>
  <section class="container">
    <div class="top-content">
      <div class="count-pets">
        <h2>1 150 000</h2>
        <p>питомцам мы помогли за 18 лет работы</p>
        <img src="/src/assets/image/bird.png" alt="" />
      </div>
    </div>
    <div class="content">
      <h3>Почему хозяева выбирают нас?</h3>

      <div class="content-article">
        <article>
          <h4>Работаем круглосуточно</h4>
          <img src="/src/assets/image/why/shape.svg" alt="" />
          <span
            >Мы готовы в любое время суток принять домашних питомцев и их
            хозяев</span
          >
        </article>
        <article>
          <h4>Широкий спектр услуг</h4>
          <img src="/src/assets/image/why/dogs.svg" alt="" />
          <span
            >Кроме широкопрофильных докторов в клинике развиты узкие направления
            в ветеринарии – офтальмология, стоматология, дерматология,
            травматология, ортопедия и онкология</span
          >
        </article>
        <article>
          <h4>Большой опыт</h4>
          <img src="/src/assets/image/why/hand.svg" alt="" />
          <span
            >30 высококвалифицированных врачей нашей клиники предоставляют
            ветеринарную помощь уже на протяжении 18 лет!</span
          >
        </article>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-content {
  height: 700px;
}

.count-pets {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 894px;

  h2 {
    font-size: 144px;
  }

  p {
    font-size: 80px;
    font-style: italic;
    line-height: 100px;
  }

  img {
    position: absolute;
    bottom: -160px;
    right: 250px;
  }
}

.content {
  h3 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 50px;
    text-align: center;
  }
}
.content-article {
  display: flex;
}
article {
  width: 440px;

  h4 {
    font-size: 30px;
    line-height: 40px;
  }
  span {
    font-size: 20px;
    font-style: italic;
    width: 318px;
    height: auto;
  }
}
</style>
