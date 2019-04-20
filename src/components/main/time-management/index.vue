<template>
  <article class="time-management">
    <section class="time-management__person-list">
      <Slider
        :sliderList="peopleList"
      />
    </section>
    <section class="time-management__description">
      <h1 class="time-management__description-title">
        Повелители времени
      </h1>
      <p class="time-management__description-text">
        Как управлять своим временем и что им в этом помогает рассказывают люди четырех профессий
      </p>
    </section>
  </article>
</template>

<script>
  import Slider from './PeopleSlider';
  import img_1 from '../../../assets/people_1.jpg';
  import img_2 from '../../../assets/people_1_2.png';

  export default {
    name: 'TimeManagement',
    data() {
      return {
        peopleList: [
          {
            id: 1,
            img: img_1,
            quote: 'Мой офис — это моя голова',
            peopleName: 'Лариса Онуфриенко',
            description: 'основатель, организатор и координатор в ASTRA MUSIC event agency'
          },
          {
            id: 2,
            img: img_2,
            quote: 'Мой офис — это моя голова',
            peopleName: 'Лариса Онуфриенко',
            description: 'основатель, организатор и координатор в ASTRA MUSIC event agency'
          },
          {
            id: 3,
            img: img_1,
            quote: 'Мой офис — это моя голова',
            peopleName: 'Лариса Онуфриенко',
            description: 'основатель, организатор и координатор в ASTRA MUSIC event agency'
          },
          {
            id: 4,
            img: img_2,
            quote: 'Мой офис — это моя голова',
            peopleName: 'Лариса Онуфриенко',
            description: 'основатель, организатор и координатор в ASTRA MUSIC event agency'
          }
        ]
      }
    },
    components: {
      Slider
    }
  };
</script>

<style lang="scss" scoped>
  .time-management__description{
    height: 190px;
  }
  .time-management__description-title {
    margin: 0 auto 0 auto;
    padding: 30px 0 10px 0;
    width: 221px;
    height: 44px;
    color: #000000;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;;
  }
  .time-management__description-text {
    margin: 0 auto;
    width: 267px;
    height: 80px;
    color: #000000;
    font-family: Arial;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
  @media (min-width: $tablet-width) {
    .time-management__description {
      height: 160px;
    }
    .time-management__description-text {
      width: 459px;
    }
  }
  @media (min-width: $desktop-width) {
    .time-management__description {
      height: 175px;
    }
  }
</style>
