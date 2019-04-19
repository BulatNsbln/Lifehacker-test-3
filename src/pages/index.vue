<template>
  <div>
    <page-header/>
    <page-main/>
    <page-footer/>
  </div>
</template>

<script>
  import PageHeader from '../components/Header/PageHeader';
  import PageMain from '../components/Main/PageMain';
  import PageFooter from '../components/Footer/PageFooter';

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
