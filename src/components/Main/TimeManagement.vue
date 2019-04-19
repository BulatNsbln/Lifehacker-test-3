<template>
  <article class="time-management">
    <section class="time-management__person-list">

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
  export default {
    name: 'TimeManagement'
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
