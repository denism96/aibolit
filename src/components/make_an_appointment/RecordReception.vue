<script setup>
import { ref } from "vue";
let isOnlineConsultation = ref(false);
let showOnlineBlock = ref(true);
let orderSubtitle = ref(`Запись на прием`);

function recordOnAppointment() {
  isOnlineConsultation.value = true;
  showOnlineBlock.value = false;
  orderSubtitle.value = "Оформление заказа";
}
function exitForm() {
  isOnlineConsultation.value = false;
  showOnlineBlock.value = true;
  orderSubtitle.value = "Запись на прием";
}
</script>
<template>
  <div class="container content">
    <div class="left-side">
      <h1>{{ orderSubtitle }}</h1>
    </div>
    <div class="right-side">
      <div
        class="record"
        v-if="showOnlineBlock"
        @click.prevent="recordOnAppointment"
      >
        <span>Онлайн консультация</span>
        <span>2000 р</span>
      </div>
      <div
        class="record"
        v-if="showOnlineBlock"
        @click.prevent="recordOnAppointment"
      >
        <span>Прием в клинике</span>
        <span>Бесплатно</span>
      </div>
      <div class="order" v-if="isOnlineConsultation">
        <form class="form-order">
          <input type="text" placeholder="ФИО" />
          <div class="inline-input">
            <input type="tel" placeholder="+7 999 999 99 99" />
            <input type="text" placeholder="Желаемая дата и время" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Кратко опишите проблему"
          ></textarea>
        </form>
      </div>
      <span class="exit"
        ><router-link v-if="showOnlineBlock" to="/">НАЗАД</router-link>
        <span v-else @click="exitForm">НАЗАД</span>
      </span>
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
    max-width: 375px;
  }
}
.right-side {
  position: relative;
  max-width: 909px;
  width: 100%;

  .record {
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
.exit {
  position: absolute;
  left: 0;
  top: -60px;
  color: $orange-color;
  padding-left: 9px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    transform: rotate(45deg);
    border-bottom: 1px solid $orange-color;
    border-left: 1px solid $orange-color;
    top: 40%;
    left: 0;
  }
}
.form-order {
  max-width: 909px;

  input,
  textarea {
    border: 1px solid $brown-lite-color;
    border-radius: 20px;
    width: 100%;
    margin-bottom: 20px;
  }

  input {
    height: 57px;
  }
  textarea {
    height: 171px;
    resize: none;
  }

  textarea::placeholder {
    padding-left: 20px;
    padding-top: 10px;
  }
  input::placeholder {
    padding-left: 20px;
  }
}
</style>
