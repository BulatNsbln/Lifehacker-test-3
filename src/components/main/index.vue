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
    width: 320px;
    background-color: white;
    margin: 0 auto;
  }
  @media only screen and (min-width: $tablet-width) {
    .page-main{
      width: $tablet-width;
    }
  }
  @media only screen and (min-width: $desktop-width) {
    .page-main{
      width: $desktop-width;
    }
  }
</style>
