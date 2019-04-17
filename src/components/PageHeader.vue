<template>
  <header class="page-header">
    <img class="page-header__logo page-header__logo_lifehacker" src="../assets/header-logo-lifehacker.png" alt="Логотип Лайфхакер">

    <picture >
      <source media="(min-width: 1200px)" srcset="../assets/header-logo-hauwei-desktop.png">
      <img class="page-header__logo_huawei" src="../assets/header-logo-huawei-mobile.png" alt="Логотип Huawei">
    </picture>

    <div class="page-header__share">
      <h1 class="page-header__share-title" >
        Поделитесь с друзьями
      </h1>
      <social-list/>
    </div>
  </header>
</template>

<script>
  import SocialList from './SocialList';

  export default {
    name: 'PageHeader',
    components: {
      SocialList
    }
  };
</script>

<style lang="scss">
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
  @media (min-width: $tablet-width) {
    .page-header {
      width: 800px;
    }
    .page-header__logo_huawei {
      margin: 10px 354px;
    }
  }
  @media (min-width: $desktop-width) {
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
    .page-header__share {
      display: inline-block;
      width: 160px;
      height: 35px;
      border-radius: 2px;
      border: 1px solid #ffffff;
      margin: 18px 0 16px 304px;

      &:hover {
        border-color: #db4696;
      }
    }
  }
</style>
