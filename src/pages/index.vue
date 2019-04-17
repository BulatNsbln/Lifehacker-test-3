<template>
  <div>
    <page-header/>
    <page-main/>
    <page-footer/>
  </div>
</template>

<script>
  import PageHeader from '../components/PageHeader';
  import PageMain from '../components/PageMain';
  import PageFooter from '../components/PageFooter';

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
