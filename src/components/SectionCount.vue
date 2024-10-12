<template>
  <section class="container">
    <div class="top-content">
      <div class="count-pets">
        <h2>1 150 000</h2>
        <p>питомцам мы помогли за 18 лет работы</p>
        <img src="/src/assets/image/bird.png" alt="" />
      </div>
    </div>
    <div class="content">
      <h3>Почему хозяева выбирают нас?</h3>

      <div class="content-article">
        <article>
          <h4>Работаем круглосуточно</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/shape.svg" alt="" />
            <p>Мы готовы в любое время суток принять домашних питомцев и их
              хозяев
            </p>
          </div>
        </article>
        <article>
          <h4>Широкий спектр услуг</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/dogs.svg" alt="" />
            <p>Кроме широкопрофильных докторов в клинике развиты узкие направления
            в ветеринарии – офтальмология, стоматология, дерматология,
            травматология, ортопедия и онкология
            </p>
          </div>
        </article>
        <article>
          <h4>Большой опыт</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/hand.svg" alt="" />
            <p>30 высококвалифицированных врачей нашей клиники предоставляют
              ветеринарную помощь уже на протяжении 18 лет!
            </p>
          </div>
        </article>
        <article>
          <h4>Собственная лаборатория</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/flask.svg" alt="" />
            <p>Оборудованная профессиональным оснащением производства компании IDEXX International Inc.(США), которое позволяет получить результаты исследования прямо на приеме
            </p>
          </div>
        </article>
        <article>
          <h4>Оснащенные стационары</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/house.svg" alt="" />
            <p>Обычный и инфекционный стационар с индивидуальным подогревом каждой клетки. Для питомцев в критическом состоянии предусмотрены кислородные камеры
            </p>
          </div>
        </article>
        <article>
          <h4>Новейшее оборудование</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/micro.svg" alt="" />
            <p>Помимо лабораторного оборудования и цифрового рентгена в клинике используется современный эндоскоп KARL STORZ
            </p>
          </div>
        </article>  
        <article>
          <h4>Запись на прием онлайн</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/hand.svg" alt="" />
            <p>Запись на приём позволяет избежать ожиданий в очереди, но если вы не можете приехать - мы выезжаем на дом!
            </p>
          </div>
        </article>
        <article>
          <h4>Аптека и зоомагазин</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/tables.svg" alt="" />
            <p>Для удобства в клинике предусмотрен аптечный пункт, а также бутик с одеждой и косметическими средствами для ухода за домашними любимцами
            </p>
          </div>
        </article>
        <article>
          <h4>Груминг салон</h4>
          <div class ="descr-article">
          <img src="/src/assets/image/why/scissors.svg" alt="" />
            <p>Отдельный кабинет для проведения гигиенческих и косметических процедур, таких как мытьё и сушка, стрижка или тримминг, уход за ушами, глазами и когтями и многое другое
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-content {
  height: 700px;
}

.count-pets {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 894px;

  h2 {
    font-size: 144px;
  }

  p {
    font-size: 80px;
    font-style: italic;
    line-height: 100px;
  }

  img {
    position: absolute;
    bottom: -160px;
    right: 250px;
  }
}

.content {
  h3 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 50px;
    text-align: center;
  }
}
.content-article {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
article {
  width: 440px;

  h4 {
    font-size: 30px;
    line-height: 40px;
  }

}
.descr-article {
    width: 100%;
    height: auto;
    display: flex;
    padding-left: 30px;
    margin-top: 40px;

    p {
      font-size: 20px;
      font-style: italic;
    }

    img {
      max-height: 100px;
      padding-top:20px;
      padding-right: 20px;
    }

  }
  article {
    margin-top: 20px;
  }
  section {
    padding-bottom: 100px;
  }
</style>
