<template>
  <div class="content">
    <div class="login">
      <h2>Вход или регистрация</h2>
      <input type="tel" placeholder="+7 999 999 99 99" />
      <button>Далее</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 400px;
  height: 368px;
  border-radius: 20px;
}
</style>
