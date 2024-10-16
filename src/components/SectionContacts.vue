<template>
  <section class="container">
    <h2 class="title">Контакты</h2>
    <div class="content">
      <div class="left-content">
        <div class="left-top-content flex flex-col">
          <h3 class="subtitle">Айболит на Краснополянской</h3>
          <span class="descr">Дзержинский район, ул. Краснополянская, 30</span>
          <span class="tel">96 22 22</span>
          <span class="descr">Круглосуточно</span>
        </div>
        <div class="left-bot-content flex flex-col">
          <h3 class="subtitle">Айболит на Тулака</h3>
          <span class="descr">Советский район, ул. Карла Маркса, 7</span>
          <span class="tel">96 22 22</span>
          <span class="descr">Круглосуточно</span>
        </div>
      </div>
      <div class="rigth-content-map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aef1ac74e2c62e7109c66496e7cdcad73ef885f61e6a85a0ca3ad152c603f414c&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
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
  justify-content: space-between;
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
}

.descr {
  font-size: 20px;
  font-style: italic;
}

.descr {
  margin-top: 30px;
}
.tel {
  margin-top: 30px;
}
</style>
