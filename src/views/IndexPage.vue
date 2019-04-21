<template>
  <div>
    <the-header />
    <the-main />
    <the-footer />
  </div>
</template>

<script>
  import TheHeader from '../components/layout/TheHeader.vue';
  import TheMain from '../components/layout/TheMain.vue';
  import TheFooter from '../components/layout/TheFooter.vue';

    export default {
      name: "IndexPage",

      components: {
        TheHeader,
        TheMain,
        TheFooter
      }
    }
</script>

<style>

</style>
