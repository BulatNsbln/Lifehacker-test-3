<template>
  <main class="main">
    <time-management />
    <presentational-product />
  </main>
</template>

<script>
  import TimeManagement from '../TimeManagement';
  import PresentationalProduct from '../PresentationalProduct';

  export default {
    name: "TheMain",

    components: {
      TimeManagement,

      PresentationalProduct
    }
  }
</script>

<style lang="scss">
  .main {
    min-width: 320px;
    background-color: $color-white;
  }
  @media (min-width: $tablet-width) {
    .main {
      width: 100%;
    }
  }
  @media (min-width: $desktop-width) {
    .main {
      width: $desktop-width;
      margin: 0 auto;
    }
  }
</style>
