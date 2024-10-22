<template>
  <section class="container flex content">
    <aside class="aside">
      <h1>Коллектив</h1>
      <h2>О НАС</h2>
      <h2>СПЕЦИАЛИСТЫ</h2>
    </aside>
    <div class="right-side">
      <img src="/src/assets/image/team/command.png" alt="" />
      <h2>О нас</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div class="specialists">
        <h2>Специалисты</h2>
        <article class="article">
          <div class="left-side-article">
            <img src="/src/assets/image/profile/photo.png" alt="" />
            <span>стаж 5 лет</span>
          </div>
          <div class="right-side-article">
            <h3>врач</h3>
            <span>Иванова Анастасия Андреевна</span>
            <h3>специализация</h3>
            <span
              >Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория</span
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

.content {
  justify-content: space-between;
  margin-top: 150px;
}

.aside {
  h1 {
    font-size: 80px;
    margin-bottom: 100px;
  }
  h2 {
    font-size: 20px;
    color: $brown-lite-color;
    margin-bottom: 30px;
  }
}

.right-side {
  max-width: 909px;
  margin-bottom: 100px;
  img {
    margin-bottom: 50px;
  }
  h2 {
    font-size: 30px;
    margin-bottom: 50px;
  }
  p {
    font-size: 20px;
    font-style: italic;
    margin-bottom: 100px;
  }
}
.article {
  display: flex;
  justify-content: space-between;
  max-width: 442px;
  padding: 10px;
  box-shadow: 0px 0px 4px 0px $brown-lite-color;
  border-radius: 20px;
}
.left-side-article {
  text-align: center;
  img {
    margin-bottom: 10px;
  }

  span {
    font-size: 15px;
    font-style: italic;
    color: $orange-color;
  }
}

.right-side-article {
  max-width: 232px;
  h3 {
    font-size: 15px;
    font-style: italic;
    color: $brown-lite-color;
  }
  span {
    font-size: 20px;
    font-style: italic;
  }
}
</style>
