<script setup>
import MobileApps from "./download/MobileApps.vue";
import SocialLink from "./social/SocialLink.vue";
</script>

<template>
  <footer class="footer">
    <div class="content flex container">
      <img class="logo-footer" src="/src/assets/image/footerlogo.svg" alt="" />
      <div class="left-content">
        <h2 class="title">Айболит</h2>
        <span class="descr">ветеринарная клиника</span>
        <div class="footer-list-container flex">
          <ul class="footer-list">
            <li class="footer-list-item">
              Политика конфиденциальности в отношении обработки персональных
              данных
            </li>
          </ul>
          <ul class="footer-list">
            <li class="footer-list-item">Главная</li>
            <li class="footer-list-item">Услуги и цены</li>
            <li class="footer-list-item">История компании</li>
            <li class="footer-list-item">Наши специалисты</li>
            <li class="footer-list-item">Вакансии</li>
            <li class="footer-list-item">Реквизиты</li>
            <li class="footer-list-item">Онлайн-оплата</li>
          </ul>
          <ul class="footer-list">
            <li class="footer-list-item">Отзывы</li>
            <li class="footer-list-item">Контакты</li>
            <li class="footer-list-item">Груминг-салон</li>
            <li class="footer-list-item">Косметика</li>
            <li class="footer-list-item">Новости и акции</li>
            <li class="footer-list-item">Блог</li>
          </ul>
        </div>
      </div>
      <div class="rigth-content">
        <MobileApps></MobileApps>
        <SocialLink class="social"></SocialLink>
        <p class="descr">aibolit34.ru</p>
        <p class="descr">aibolit@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";
.footer {
  background-color: $brown-color;
  height: 469px;
  color: $white-color;
}
.content {
  padding: 60px 90px 0 90px;
  position: relative;
}
.logo-footer {
  position: absolute;
  left: -20px;
  top: 60px;
}
.footer-list-container {
  margin-top: 50px;
}
.footer-list {
  margin-right: 90px;
  height: 210px;
  width: 200px;
}
.footer-list-item {
  font-size: 20px;
  font-style: italic;
  width: 100%;
}
.title {
  font-size: 50px;
}
.descr {
  font-size: 20px;
  font-style: italic;
}
.apps {
  position: static;
}
.social {
  margin-top: 30px;
}
</style>
