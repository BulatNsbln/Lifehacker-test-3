<template>
  <ul class="people-list">
    <li class="people-item" v-for="people in peopleList">
      <div class="people-item__wrapper" v-bind:style='"background-image: url(" + people.img + ")"' :key="people.id">
        <h1 class="people-item__quote" v-html="people.quote" ></h1>
        <h5 class="people-item__name">{{people.peopleName}}</h5>
        <p class="people-item__description">{{people.description}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'PeopleList',
    props: [
      'peopleList'
    ]
  };
</script>

<style lang="scss" scoped>
  .people-list {
    display: none;
  }
  @media (min-width: $desktop-width) {
    .people-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      margin: 0;
      padding: 0;

      list-style: none;
      cursor: pointer;
    }
    .people-item {
      margin: 0;
      padding: 0;
      &:hover {
        width: 637px;
      }
    }
    .people-item__wrapper {
      position: relative;

      display: flex;
      align-items: flex-end;
      justify-content: center;

      height: 525px;

      background-size: cover;
      background-position-x: -20px;
      filter: grayscale(100%);

      &:hover {
        background-position-x: -40px;
        filter: grayscale(0);
        background-size: 786px 580px;

        .people-item__quote {
          position: absolute;
          left: 300px;
          bottom: 270px;

          display: inline-block;

          color: $color-white;
          font-size: 36px;
          font-weight: 500;
          line-height: 42px;
          text-transform: uppercase;
        }
        .people-item__name {
          position: absolute;
          left: 300px;
          top: 256px;
        }
        .people-item__description {
          position: absolute;
          left: 300px;
          top: 286px;

          display: inline-block;

          width: 317px;
          height: 33px;

          color: $color-white;
          font-family: Arial;
          font-size: 14px;
        }
      }
    }
    .people-item__name {
      margin: 0;
      padding: 0;
      margin-bottom: 44px;

      color: $color-white;
      font-family: Arial;
      font-size: 16px;
      font-weight: 700;
    }
    .people-item__quote {
      display: none;
    }
    .people-item__description {
      display: none;
    }
  }
</style>
