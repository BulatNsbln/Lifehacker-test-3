<template lang="pug">
  article.time-management
    section.time-management__person-list
      person-slider(:sliderList="personList")
      people-list(:peopleList="personList")
    section.time-management__description
      h1.time-management__description-title Повелители времени
      p.time-management__description-text Как управлять своим временем и что им в этом помогает рассказывают люди четырех профессий
</template>

<script>
  import PersonSlider from './TimeManagementSlider';
  import PeopleList from './TimeManagementPeopleList';
  import img_1 from '../assets/people_1-active.jpg';
  import img_2 from '../assets/people_2-active.jpg';
  import img_3 from '../assets/people_3-active.jpg';
  import img_4 from '../assets/people_4-active.jpg';

  const peoples = [
    {
      id: 1,
      img: img_1,
      quote: 'Мой офис — <br/> это моя голова',
      peopleName: 'Лариса Онуфриенко',
      description: 'основатель, организатор и координатор в ASTRA MUSIC event agency'
    },
    {
      id: 2,
      img: img_4,
      quote: 'У меня не бывает <br/> обычных дней',
      peopleName: 'Саша Москалец',
      description: 'Стилист, музыкант, модель'
    },
    {
      id: 3,
      img: img_3,
      quote: 'Работа комментатора <br/>  — это не только <br/> рассказ о спорте',
      peopleName: 'Павел Занозин',
      description: 'Комментатор, ведущий'
    },
    {
      id: 4,
      img: img_2,
      quote: 'Музыка для меня — <br/> религия',
      peopleName: 'Никита Забелин',
      description: 'Диджей, основатель проекта Resonance'
    }
  ];

  export default {
    name: 'TimeManagement',

    data() {
      return {
        personList: peoples
      }
    },

    components: {
      PeopleList,
      PersonSlider
    }
  };
</script>

<style lang="scss">
  .time-management__description{
    flex-direction: column;
    justify-content: center;

    height: 190px;
    display: flex;
  }
  .time-management__description-title {
    width: 225px;
    height: 44px;
    margin: 0 auto 0 auto;
    padding: 0 0 10px 0;

    color: $color-black;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;;
  }
  .time-management__description-text {
    width: 83%;
    height: 80px;
    margin: 0 auto;

    color: $color-black;
    font-family: Arial;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
  @media (min-width: $tablet-width) {
    .time-management__description {
      height: 160px;
    }
    .time-management__description-title {
      padding: 30px 0 10px 0;
    }
    .time-management__description-text {
      width: 57%;
    }
  }
  @media (min-width: $desktop-width) {
    .time-management__description {
      height: 175px;
    }
  }
</style>
