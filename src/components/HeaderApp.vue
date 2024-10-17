<template>
  <header class="header container">
    <img src="/src/assets/image/logo.svg" alt="logo" />
    <nav>
      <ul class="header-list">
        <li class="header-list-item">ЛИЧНЫЙ КАБИНЕТ</li>
        <li class="header-list-item">О НАС</li>
        <li class="header-list-item">НОВОСТИ И АКЦИИ</li>
        <li class="header-list-item">КОНТАКТЫ</li>
        <li class="header-list-item">БЛОГ</li>
      </ul>
    </nav>
    <span>Волгоград</span>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1760px;
  margin-top: 30px;

  nav {
    max-width: 1300px;
    width: 100%;
  }
}
.header-list {
  display: flex;
  justify-content: space-between;
}
</style>
