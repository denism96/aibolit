<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:isOpen"]);

const close = () => {
  emit("update:isOpen", false);
};
</script>
<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <span class="closeModal" @click="close"></span>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/main.scss";

.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 40%;
  top: 40%;
  width: 400px;
  height: 368px;
  background-color: #fff;
  border-radius: 20px;
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
