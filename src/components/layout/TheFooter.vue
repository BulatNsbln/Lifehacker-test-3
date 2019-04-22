<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <p class="footer__copyright">
        <a class="footer__copyright_pink">Лайфхакер</a> | <a class="footer__copyright_pink">Huawei</a> © 2018
      </p>
      <base-share />
    </div>
  </footer>
</template>

<script>
  import BaseShare from '../BaseShare';

  export default {
    name: "TheFooter",

    components: {
      BaseShare
    }
  }
</script>

<style lang="scss">
  .footer {
    min-width: 320px;
    height: 137px;
    margin: 0 auto;

    background-color: #424242;
  }
  .footer__wrapper {
    display: flex;
    flex-direction: column-reverse;

    width: 212px;
    margin: 0 auto;
  }
  .footer__copyright {
    margin-top: 19px;

    color: $color-white;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 24px;
    &_pink {
      cursor: pointer;
    }
  }
  .footer__copyright_pink:hover {
    color: $color-pink-near;
  }
  .share {
    width: 212px;
    height: 35px;

    margin-top: 32px;
    margin-bottom: 19px;
  }
  .footer__copyright {
    margin: 0 auto;
  }
  @media (min-width: $tablet-width) {
    .footer {
      width: 100%;
      height: 103px;
    }
    .footer__wrapper {
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      height: 100%;
    }
    .share {
      width: 160px;
      margin: auto 47px auto 0;
    }
    .footer__copyright {
      margin: auto 0 auto 49px;
    }
  }
  @media (min-width: $desktop-width) {
    .footer {
      width: 1280px;
      height: 90px;
    }
    .footer__copyright {
      margin-left: 94px;
    }
    .share {
      margin-right: 95px;
    }
  }
</style>
