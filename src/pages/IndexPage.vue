<template>
  <div>
    <PageHeader/>
    <PageMain/>
    <PageFooter/>
  </div>
</template>

<script>
  import PageHeader from '../components/PageHeader/index.vue';
  import PageMain from '../components/PageMain/index.vue';
  import PageFooter from '../components/PageFooter/index.vue';

    export default {
      name: "IndexPage",
      components: {
        PageHeader,
        PageMain,
        PageFooter
      }
    }
</script>

<style>

</style>
