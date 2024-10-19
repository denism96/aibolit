<template>
  <div class="container content">
    <div class="left-side">
      <h1>Запись <br />на прием</h1>
    </div>
    <div class="right-side">
      <div class="online">
        <span>Онлайн консультация</span>
        <span>2000 р</span>
      </div>
      <div class="reception">
        <span>Прием в клинике</span>
        <span>Бесплатно</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  min-height: 700px;
}

.left-side {
  h1 {
    font-size: 80px;
    line-height: 110px;
  }
}
.right-side {
  max-width: 909px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0 $brown-lite-color;
    border-radius: 20px;
    height: 85px;

    span {
      padding: 0 20px 0 20px;
      font-size: 20px;
      font-style: italic;
    }
  }
}
</style>
