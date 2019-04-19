<template>
  <main class="page-main">
    <TimeManagement/>
    <PresentationalProduct/>
  </main>
</template>

<script>
  import TimeManagement from './TimeManagement';
  import PresentationalProduct from './PresentationalProduct';

  export default {
    name: "PageMain",
    components: {
      TimeManagement,
      PresentationalProduct
    }
  }
</script>

<style lang="scss" scoped>
  .page-main {
    width: 320px;
    background-color: white;
    margin: 0 auto;
  }
  @media (min-width: $tablet-width) {
    .page-main{
      width: $tablet-width;
    }
  }
  @media (min-width: $desktop-width) {
    .page-main{
      width: $desktop-width;
    }
  }
</style>
