<template>
  <header class="page-header">
    <img class="page-header__logo page-header__logo_lifehacker" src="../assets/header-logo-lifehacker.png" alt="Логотип Лайфхакер">
    <picture >
      <source media="(min-width: 1200px)" srcset="../assets/header-logo-hauwei-desktop.png">
      <img class="page-header__logo_huawei" src="../assets/header-logo-huawei-mobile.png" alt="Логотип Huawei">
    </picture>
    <share />
  </header>
</template>

<script>
  import Share from './Share';

  export default {
    name: 'PageHeader',
    components: {
      Share
    }
  };
</script>

<style lang="scss" scoped>
  .page-header {
    width: 320px;
    margin: 0 auto;
    background-color: #752e74;
  }
  .page-header__logo_huawei {
    width: 92px;
    height: 20px;
    margin: 10px 114px;
  }
  .page-header__logo_lifehacker {
    display: none;
  }
  .page-header__share {
    display: none;
  }
  .share {
    display: none;
    width: 160px;
    margin: 18px 0 16px 304px;
  }
  .share__title {
    margin: 5px 37px;
  }
  @media (min-width: $tablet-width) {
    .page-header {
      width: 800px;
    }
    .page-header__logo_huawei {
      margin: 10px 354px;
    }
  }
  @media (min-width: $desktop-width) {
    .share {
      display: inline-block;
    }
    .page-header {
      width: 1280px;
      display: flex;
    }
    .page-header__logo_huawei {
      width: 161px;
      height: 35px;
      margin: 15px 0 19px 313px;
    }
    .page-header__logo_lifehacker {
      display: inline-block;
      margin: 15px 0 26px 94px;
    }
  }
</style>
