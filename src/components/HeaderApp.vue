<template>
  <header class="header container">
    <router-link to="/"
      ><img src="/src/assets/image/logo.svg" alt="logo"
    /></router-link>
    <nav>
      <ul class="header-list">
        <li class="header-list-item">
          <router-link to="/profile">ЛИЧНЫЙ КАБИНЕТ</router-link>
        </li>
        <li class="header-list-item">
          <router-link to="/about">О НАС</router-link>
        </li>
        <li class="header-list-item">
          <router-link to="/news">НОВОСТИ И АКЦИИ</router-link>
        </li>
        <li class="header-list-item">
          <router-link to="/contacts">КОНТАКТЫ</router-link>
        </li>
        <li class="header-list-item">
          <router-link to="/blog">БЛОГ</router-link>
        </li>
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
