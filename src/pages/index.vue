<template>
  <div>
    <page-header/>
    <page-main/>
    <page-footer/>
  </div>
</template>

<script>
  import PageHeader from '../components/header/index';
  import PageMain from '../components/main/index';
  import PageFooter from '../components/footer/index';

    export default {
      name: "index",
      components: {
        PageHeader,
        PageMain,
        PageFooter
      }
    }
</script>

<style scoped>

</style>
