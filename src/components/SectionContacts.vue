<template>
  <section class="container">
    <h2 class="title">Контакты</h2>
    <div class="content">
      <div class="left-content">
        <div class="left-top-content flex flex-col">
          <h3 class="subtitle">Айболит на Краснополянской</h3>
          <span class="descr touch"
            >Дзержинский район,<br />
            ул. Краснополянская, 30</span
          >
          <span class="tel descr">96 22 22</span>
          <span class="descr clock">Круглосуточно</span>
        </div>
        <div class="left-bot-content flex flex-col">
          <h3 class="subtitle">Айболит на Тулака</h3>
          <span class="descr touch"
            >Советский район,<br />
            ул. Карла Маркса, 7</span
          >
          <span class="tel descr">96 22 22</span>
          <span class="descr clock">Круглосуточно</span>
        </div>
      </div>
      <div class="rigth-content-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aef1ac74e2c62e7109c66496e7cdcad73ef885f61e6a85a0ca3ad152c603f414c&amp;source=constructor"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
}

.left-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.rigth-content-map {
  width: 950px;
  height: 526px;
  border: 1px solid red;
}

.title {
  font-size: 40px;
}
.subtitle {
  font-size: 30px;
  font-weight: 600;
}

.descr {
  position: relative;
  font-size: 20px;
  font-style: italic;
  margin-top: 15px;
  max-width: 320px;
  padding-left: 45px;
  margin-left: 10px;
}

.tel {
  position: relative;
  margin-top: 15px;
  padding-left: 45px;
  margin-left: 10px;

  &::before {
    content: url(/src/assets/image/contacts/tel.svg);
    position: absolute;
    width: 25px;
    height: 25px;
    left: 0;
  }
}
.touch::before {
  content: url(/src/assets/image/contacts/touch.svg);
  position: absolute;
  left: 0;
  top: 30%;
}
.clock::before {
  content: url(/src/assets/image/contacts/clock.svg);
  position: absolute;
  left: 0;
}
</style>
