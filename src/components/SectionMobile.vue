<template>
  <section>
    <div class="content">
      <h2>Удобное приложение для питомцев и их хозяев</h2>
      <img src="/src/assets/image/mobile/dog.png" alt="" />
      <img class="phone" src="/src/assets/image/mobile/phone.png" alt="" />
      <img
        class="appstore"
        src="/src/assets/image/mobile/appstore.png"
        alt=""
      />
      <img
        class="googleplay"
        src="/src/assets/image/mobile/googleplay.png"
        alt=""
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

section {
  width: 100%;
  background-color: $orange-color;
  height: 1000px;
  padding-top: 200px;
}

.content {
  position: relative;
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 80px;
    color: $white-color;
    width: 826px;
    padding-bottom: 80px;
  }

  .phone {
    right: -8%;
    bottom: -42%;
  }

  .appstore {
    left: 0;
    bottom: 12px;
  }

  .googleplay {
    left: 170px;
    bottom: 0px;
  }

  img {
    position: absolute;
    bottom: -46%;
    right: 11%;
  }

  &::before {
    content: "скоро";
    color: $white-color;
    font-size: 30px;
  }
}
</style>
