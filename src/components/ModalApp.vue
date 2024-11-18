<script setup></script>
<template>
  <div class="modal">
    <div class="modal-content">
      <span class="closeModal" @click="$emit('close')"></span>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/main.scss";

.modal {
  position: fixed;
  z-index: 1000;
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
</style>
