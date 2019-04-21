<template>
  <main class="page-main">
    <TimeManagement/>
    <PresentationalProduct/>
  </main>
</template>

<script>
  import TimeManagement from './time-management/index';
  import PresentationalProduct from './presential-product/index';

  export default {
    name: "PageMain",
    components: {
      TimeManagement,
      PresentationalProduct
    }
  }
</script>

<style lang="scss">
  .page-main {
    min-width: 320px;
    background-color: $color-white;
  }
  @media (min-width: $tablet-width) {
    .page-main {
      width: 100%;
    }
  }
  @media (min-width: $desktop-width) {
    .page-main {
      width: $desktop-width;
      margin: 0 auto;
    }
  }
</style>
