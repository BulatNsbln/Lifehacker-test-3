<template>
  <div id="app" :data-io-article-url="getLocation()">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            getLocation() {
                return window.location.href.split('?')[0];
            }
        }
    };
</script>

<style>

</style>
