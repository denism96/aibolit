<template>
  <section>
    <!-- <ul class="section-list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul> -->
    <div class="center-content">
      <h1>Айболит круглосуточная ветклиника</h1>
      <button>Записаться</button>
      <div class="social">
        <img src="/src/assets/image/inst.svg" alt="inst" />
        <img src="/src/assets/image/fb.svg" alt="fb" />
        <img src="/src/assets/image/vk.svg" alt="vk" />
        <img src="/src/assets/image/youtube.svg" alt="youtube" />
      </div>
    </div>
    <div class="right-content">
      <img class="cat-image" src="/src/assets/image/cat.png" alt="cat" />
      <img class="dog-image" src="/src/assets/image/dog.png" alt="dog" />
      <p>8 121 909 00 00</p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";
section {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 80px;
  height: 786px;
}
.center-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 80px;
    max-width: 645px;
    line-height: 80px;
  }
  button {
    background-color: $orange-color;
    padding: 10px 40px;
    border-radius: 30px;
    color: $white-color;
    margin-top: 30px;
    max-width: 284px;
  }
}
.right-content {
  position: relative;
  width: 833px;
  height: 100%;

  .dog-image {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .cat-image {
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
  p {
    position: absolute;
    bottom: 50px;
    right: 40px;
  }
}
.social {
  display: flex;
  margin-top: auto;
  margin-bottom: 50px;
  img {
    margin-right: 40px;
  }
}
</style>
