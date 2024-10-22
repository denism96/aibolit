<template>
  <div class="blog container flex justify-between">
    <aside class="aside">
      <h1>Новости и акции</h1>
    </aside>
    <div class="right-side">
      <article class="article flex">
        <img src="/src/assets/image/help.png" alt="" />
        <div class="right-side-article">
          <h2>Подарок</h2>
          <span class="date">до 1 декабря 2024</span>
          <p>
            Данные клинического осмотра, указывающие на наличие наружного отита,
            включают такие признаки, как отек и эритема ушной раковины,
            выделения из ушей, болезненная реакция и/или беспокойство при
            пальпации наружного слухового хода и потряхивание головой после т
            ...
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
<style lang="scss">
@import "/src/assets/styles/main.scss";

.blog {
  margin-top: 150px;
  h2 {
    font-size: 30px;
  }
}
.aside {
  max-width: 330px;
  h1 {
    font-size: 80px;
    margin-bottom: 100px;
  }
  h2 {
    color: $brown-lite-color;
    margin-bottom: 30px;
  }
}
.article {
  max-width: 909px;
  margin-bottom: 60px;
  align-items: center;
  img {
    margin-right: 15px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .date {
    color: $brown-lite-color;
    font-style: italic;
    font-size: 15px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    font-style: italic;
  }
}
</style>
