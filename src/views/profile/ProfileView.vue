<template>
  <section class="profile container">
    <aside class="aside">
      <h1>Виктория</h1>
      <span>ЛИЧНЫЕ ДАННЫЕ</span>
      <span>МОИ ПИТОМЦЫ</span>
      <span>ЗАПИСЬ НА ПРИЕМ</span>
      <span>ВЫЙТИ</span>
    </aside>
    <div class="content">
      <h2>Личные данные</h2>
      <div class="my-profile">
        <div class="left-side">
          <img src="/src/assets/image/profile/photo.png" alt="" />
          <span>изменить</span>
        </div>
        <div class="center">
          <h3 class="subtitle">имя</h3>
          <span class="descr">Виктория</span>
          <h3 class="subtitle">фамилия</h3>
          <span class="descr">Иванова</span>
          <h3 class="subtitle">отчество</h3>
          <span class="descr">Александровна</span>
          <h3 class="subtitle">телефон</h3>
          <span class="descr">+7 999 598-12-45</span>
        </div>
        <div class="right-side">
          <h3 class="subtitle">О себе</h3>
          <p class="descr">
            Живу в Волгограде, очень люблю животных! Мечтаю завести много зверей
            и построить приют. Пока что у меня собака, кошка и рыбки :)
          </p>
        </div>
      </div>
      <div class="my-pets">
        <h2>Мои питомцы</h2>
        <button class="add-pets">
          <svg
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M83.5003 53.4483C83.8612 53.3268 84.3191 52.7343 84.3428 52.3585C84.8722 43.2944 77.3876 31.211 74.6923 27.1768C72.5224 28.0417 70.411 29.4397 68.4618 31.5701C68.4618 31.5701 64.569 34.1825 63.188 46.8753C70.4689 56.3046 79.516 54.7627 83.5003 53.4483Z"
              fill="white"
            />
            <path
              d="M112.375 37.3596L100.447 34.4481C100.447 34.4481 100.107 31.5703 96.725 30.3878C94.2597 29.5238 85.765 24.6416 77.4071 26.3659C80.567 31.1757 87.5964 43.0316 87.0406 52.5145C86.9579 54.0055 85.7726 55.5459 84.3476 56.0169C82.9778 56.4727 80.5194 57.1036 77.5316 57.1036C73.2028 57.1036 67.7657 55.7723 62.8674 50.654C62.7713 52.2805 62.7165 54.0397 62.7068 55.9432C62.6519 65.7613 50.1806 75.0703 50.1806 75.0703L48.5195 78.5127C51.9098 85.8533 57.2245 92.1274 63.8226 96.6808C64.1217 91.9917 65.2976 88.3183 66.6595 85.5578C69.2388 80.3146 72.8561 77.4047 74.702 76.1734C75.099 65.3519 78.6114 62.1892 81.5416 61.4661C82.4417 61.2431 83.3906 61.4352 84.137 61.9955C84.9865 62.6295 85.5329 63.676 85.5883 64.7994C85.739 67.7081 87.4582 69.7501 88.2734 70.5611C89.5953 70.6841 90.8573 70.8936 92.0452 71.1815L92.1543 70.1611L93.0623 61.3446C93.2162 59.8566 94.5536 58.6022 96.0341 58.3901C101.656 57.5712 114.181 54.2413 114.995 40.7095C115.089 39.217 113.828 37.716 112.375 37.3596ZM93.7917 40.5029C92.9502 40.5029 92.2668 39.8225 92.2668 38.98C92.2668 38.1375 92.9502 37.4572 93.7917 37.4572C94.6352 37.4572 95.3152 38.1375 95.3152 38.98C95.3122 39.821 94.6336 40.5029 93.7917 40.5029Z"
              fill="white"
            />
            <path
              d="M100.451 80.7925C99.9998 76.9561 94.5845 73.7949 87.5869 73.3458C87.5869 73.3458 83.8715 70.4895 83.622 65.5591C83.5811 64.8127 83.0232 64.0708 82.2986 64.2496C80.4288 64.7096 77.254 67.1101 77.0958 78.0735C77.0958 78.0735 66.9258 83.2042 66.1909 97.996C72.7099 101.913 80.3066 104.21 88.4152 104.344L88.3243 102.225C88.2906 101.478 88.8322 100.66 89.5307 100.398L98.1932 97.1496C98.1932 97.1496 102.256 97.3775 103.946 94.3275C104.801 92.7901 105.595 91.7158 106.18 91.0236C106.658 90.4542 106.651 89.6402 106.115 89.1198C104.346 87.4115 100.788 83.6594 100.451 80.7925ZM95.3121 84.5058C94.472 84.5058 93.7902 83.8273 93.7902 82.9842C93.7902 82.1393 94.472 81.4592 95.3121 81.4592C96.1552 81.4592 96.8371 82.1393 96.8371 82.9842C96.8374 83.827 96.1555 84.5058 95.3121 84.5058Z"
              fill="white"
            />
            <path
              d="M15 43.287C15 45.8523 17.0796 47.9319 19.6448 47.9319H26.7669V54.7443C26.7669 57.5234 29.0198 59.7762 31.7988 59.7762C34.5779 59.7762 36.8308 57.5234 36.8308 54.7443V47.9319H43.9529C46.5181 47.9319 48.5977 45.8523 48.5977 43.287C48.5977 40.7218 46.5181 38.6422 43.9529 38.6422H36.8308V31.8298C36.8308 29.0507 34.5779 26.7979 31.7988 26.7979C29.0198 26.7979 26.7669 29.0507 26.7669 31.8298V38.6422H19.6448C17.0796 38.6422 15 40.7218 15 43.287Z"
              fill="white"
            />
          </svg>
          <span>ДОБАВИТЬ НОВОГО ПИТОМЦА</span>
        </button>

        <div class="pet">
          <div class="left-side">
            <img src="/src/assets/image/profile/dog.png" alt="" />
            <span>изменить</span>
          </div>
          <div class="right-side-pets">
            <h2>Громопетр</h2>
            <div class="right-side-content">
              <div class="center mr-5">
                <h3 class="subtitle">тип</h3>
                <span class="descr">Собака</span>
                <h3 class="subtitle">пол</h3>
                <span class="descr">Мужской</span>
                <h3 class="subtitle">порода</h3>
                <span class="descr">Без породы</span>
                <h3 class="subtitle">возраст</h3>
                <span class="descr">1 год 2 месяца</span>
              </div>
              <div class="right-side-content__right">
                <div class="card">
                  <h3 class="subtitle">медицинская карта</h3>
                  <span class="descr"
                    >Медицинскую карту заводят при первом посещении клиники и
                    обновляют при каждом обращении. Здесь вы сможете посмотреть
                    и скачать актуальную карту в формате pdf</span
                  >
                </div>
                <div class="result-analiz">
                  <h3 class="subtitle">результаты анализов</h3>
                  <span class="descr">Пока нет готовых анализов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="record">
        <h2>Запись на прием</h2>
        <div class="record-content flex">
          <div class="left-side">
            <img src="/src/assets/image/profile/doctor.png" alt="" />
            <span>отменить прием</span>
          </div>
          <div class="center center__record">
            <h3 class="subtitle">врач</h3>
            <span class="descr"
              >Иванова <br />
              Ирина Владимировна</span
            >
            <h3 class="subtitle">ветклиника</h3>
            <span class="descr">Айболит на Краснополянской</span>
          </div>
          <div class="right-side">
            <h3 class="subtitle">питомец</h3>
            <span class="descr">Громопетр</span>
            <h3 class="subtitle">дата</h3>
            <span class="descr">15.10.19</span>
            <h3 class="subtitle">время</h3>
            <span class="descr">15:45</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/styles/main.scss";

.profile {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
}

.content {
  margin-bottom: 100px;
}
.aside {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 80px;
    margin-bottom: 100px;
  }

  span {
    font-size: 20px;
    color: $brown-lite-color;
    margin-bottom: 30px;
  }
}

.my-profile {
  display: flex;
  max-width: 909px;
  padding: 15px;
  box-shadow: 0px 0px 4px 0px $brown-lite-color;
  border-radius: 20px;
  margin-bottom: 100px;
}

.left-side {
  text-align: center;
  margin-right: 15px;
  max-width: 130px;

  img {
    margin-bottom: 20px;
  }
  span {
    color: $orange-color;
    font-size: 20px;
    font-style: italic;
  }
}

.center {
  max-width: 250px;
}
.subtitle {
  font-size: 15px;
  font-style: italic;
  color: $brown-lite-color;
}
.descr {
  font-size: 20px;
  font-style: italic;
}

.right-side {
  max-width: 409px;
}

.my-pets {
  margin-bottom: 100px;
}
.add-pets {
  position: relative;
  background-color: $orange-color;
  color: $white-color;
  font-size: 30px;
  font-style: italic;
  width: 100%;
  border-radius: 20px;
  padding: 40px 0 40px 0;
  margin-bottom: 40px;

  & svg {
    position: absolute;
    left: 0;
    top: 0;
  }
}
.pet {
  display: flex;
  max-width: 909px;
  padding: 15px;
  box-shadow: 0px 0px 4px 0px $brown-lite-color;
  border-radius: 20px;
  margin-bottom: 30px;
}
.right-side-content {
  display: flex;
  justify-content: space-between;
}
.right-side-content__right {
  max-width: 409px;
}

.record-content {
  box-shadow: 0px 0px 4px 0px $brown-lite-color;
  border-radius: 20px;
  padding: 10px;
}
.center__record {
  max-width: 280px;
  margin-right: 15px;
}
</style>
