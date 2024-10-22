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
        <li class="header-list-item about">
          <router-link to="/about">О НАС</router-link>
          <div class="about-nav">
            <ul>
              <li><router-link to="/">Услуги и цены</router-link></li>
              <li><router-link to="/">Коллектив</router-link></li>
              <li><router-link to="/history">История компании</router-link></li>
            </ul>
          </div>
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
@import "/src/assets/styles/main.scss";
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
.about {
  position: relative;
}
.about:hover > .about-nav {
  display: block;
}

.about-nav {
  position: absolute;
  top: 20px;
  left: -60px;
  display: none;
  width: 250px;
  height: 230px;
  box-shadow: 0px 0px 4px 0px $brown-lite-color;
  border-radius: 20px;
  padding: 30px;
  z-index: 2;
  background-color: $white-color;

  li {
    font-size: 20px;
    font-style: italic;
    margin-bottom: 30px;
  }
}
</style>
