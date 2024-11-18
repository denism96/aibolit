<script setup lang="ts">
import { ref } from "vue";
import ModalApp from "./ModalApp.vue";
let isOpen = ref(false);

function showModal() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header class="header container">
    <router-link to="/"
      ><img src="/src/assets/image/logo.svg" alt="logo"
    /></router-link>
    <nav>
      <ul class="header-list">
        <li class="header-list-item" @click="showModal">
          <!-- <router-link to="/profile">ЛИЧНЫЙ КАБИНЕТ</router-link> -->
          ЛИЧНЫЙ КАБИНЕТ
        </li>
        <li class="header-list-item about">
          <router-link to="/team" class="hover">О НАС</router-link>
          <div class="about-nav">
            <ul>
              <li><router-link to="/">Услуги и цены</router-link></li>
              <li><router-link to="/team">Коллектив</router-link></li>
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
  <ModalApp v-if="isOpen" @close="showModal">
    <h1 class="modal-subtitle">Вход или регистрация</h1>
    <input class="modal-input" type="tel" placeholder="+7 999 999 99 99" />
    <button class="modal_btn">Далее</button>
  </ModalApp>
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

.about:hover {
  .hover {
    font-weight: bold;
  }

  .about-nav {
    display: block;
  }
}

.about-nav {
  position: absolute;
  top: 20px;
  left: -60px;
  display: none;
  width: 300px;
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

    &:hover {
      padding-left: 10px;
      font-weight: bold;
    }
  }
}

.modal-subtitle {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 30px;
  max-width: 187px;
}
.modal-input {
  width: 344px;
  height: 57px;
  border: 1px solid $brown-lite-color;
  border-radius: 20px;
  margin-bottom: 30px;

  &::placeholder {
    padding-left: 20px;
  }
}
.modal_btn {
  background-color: $brown-lite-color;
  width: 284px;
  height: 67px;
  border-radius: 33px;
  color: #fff;
  font-size: 30px;
}
.closeModal {
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 3;
  // outline: 1px solid red;
  &::before {
    content: "";
    position: absolute;
    right: 20px;
    top: 5px;
    width: 1px;
    height: 20px;
    border: 1px solid $brown-lite-color;
    transform: rotate(45deg);
  }
  &::after {
    content: "";
    position: absolute;
    right: 20px;
    top: 5px;
    width: 1px;
    height: 20px;
    border: 1px solid $brown-lite-color;
    transform: rotate(-45deg);
  }
}
</style>
