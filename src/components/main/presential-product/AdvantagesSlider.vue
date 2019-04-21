<template>
  <section class="slider">
    <nav class="slider__nav">
      <button type="button" class="slider__nav-toggle slider__nav-toggle_prev" v-on:click='prevSlide'>
        <svg class="slider__nav-toggle_image slider__nav-toggle_image-prev"  viewBox="0 0 26 46"><defs><path id="st66a" d="M541 211a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-27v27a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-30a1 1 0 0 1 1-1z"/></defs><g><g transform="rotate(-45 18.25 732.175)"><use  xlink:href="#st66a"/></g></g></svg>
      </button>
      <button type="button" class="slider__nav-toggle slider__nav-toggle_next" v-on:click='nextSlide'>
        <svg class="slider__nav-toggle_image slider__nav-toggle_image-next"  viewBox="0 0 26 46"><defs><path id="st66a" d="M541 211a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-27v27a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-30a1 1 0 0 1 1-1z"/></defs><g><g transform="rotate(-45 18.25 732.175)"><use xlink:href="#st66a"/></g></g></svg>
      </button>

      <div class="slider__nav-wrapper">
        <button class="slider__nav-toggle-dot" v-for='slide in sliderList' v-on:click='openSlide(slide.id)' :key="slide.id"></button>
      </div>
    </nav>

    <div class='slider__container'>
      <ul class="slider__list" v-bind:style='{left: sliderOffsetLeft + "px"}'>
        <li class="slider__slide" v-for='slide in sliderList' :key="slide.id">
          <img class="slider__slide-image" :src="`${slide.img}`" alt="Изображение сладера">
          <div class="slider__slide-text" v-html="`${slide.text}`"></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Slider from '../../Slider';

  export default new Slider();
</script>

<style lang="scss" scoped>
  .slider {
    position: relative;
    /*width: 320px;*/
    min-width: 320px;
    width: 100%;
    height: 528px;
    background-color: #111111;
    display: flex;
    justify-content: center;
  }
  .slider__nav-wrapper {
    position: absolute;
    bottom: 48px;
    /*left: 80px;*/
    left: 25%;
  }
  .slider__nav-toggle {
    z-index: 1;
    background: none;
    border: none;
    outline: none;
    position: absolute;
    &_prev {
      top: 70px;
      left: 30px;
    }
    &_next {
      top: 55px;
      right: 30px;
    }
  }
  .slider__nav-toggle-dot {
    margin: 0;
    padding: 0;
    z-index: 2;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #db4696;
    margin-right: 15px;

    &:hover {
      background-color: #ffffff;
    }
    &_active {
      background: none;
      border: 1px solid #db4696;
      z-index: 2;
      &:hover {
        background: none;
      }
    }
  }
  .slider__nav-toggle_image {
    width: 26px;
    height: 60px;
    cursor: pointer;
    fill: #db4696;
    &:hover {
      fill: #ffffff;
    }
  }
  .slider__nav-toggle_image-next {
    transform: rotate(180deg);
  }
  .slider__list {
    width: 700%;
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    transition: all .5s ease;
  }
  .slider__slide {
    display: flex;
    flex-direction: column;
    /*margin: 0 26.5px;*/
    width: 100%;
    margin-top: 44px;
  }
  .slider__slide-image {
    width: 61px;
    height: 103px;
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .slider__slide-text {
    /*width: 267px;*/
    min-width: 267px;
    width: 83%;

    height: 264px;
    color: #ffffff;
    font-family: Arial;
    font-size: 16px;
    line-height: 22px;
    margin: 0 auto;
    text-align: center;
  }
  .slider__list {
    display: flex;
  }
  .slider__container {
    /*width: 320px;*/
    min-width: 320px;
    width: 100%;
    overflow: hidden;
  }
  @media (min-width: 480px) {
    .slider__nav-wrapper {
      left: 40%;
    }
  }
  @media only screen and (min-width: $tablet-width) {
    .slider {
      /*width: $tablet-width;*/
      width: 100%;
      height: 311px;
    }
    .slider__container {
      /*width: $tablet-width;*/
      width: 100%;
    }
    .slider__slide {
      flex-direction: row;
      align-items: center;
      /*margin: 80px 115px 0 115px;*/
      margin: 80px 115px 0 115px;
    }
    .slider__slide-text {
      /*width: 440px;*/
      width: 80%;
      height: 154px;
      margin-left: 70px;
      text-align: left;
    }
    .slider__nav-toggle {
      &_prev {
        top: 130px;
        left: 30px;
      }
      &_next {
        top: 115px;
        right: 30px;
      }
    }
    .slider__nav-wrapper {
      bottom: 44px;
      /*left: 320px;*/
      left: 40%;
    }
  }
  @media only screen and (min-width: $desktop-width) {
    .slider {
      width: 1280px;
      height: 341px;
    }
    .slider__container {
      width: $desktop-width;
    }
    .slider__slide {
      margin-left: 260px;
      margin-right: 295px;
    }
    .slider__slide-text {
      width: 574px;
      height: 156px;
      font-size: 18px;
      line-height: 26px;
      margin-left: 90px;
    }
    .slider__nav-wrapper {
      bottom: 57px;
      left: 560px;
    }
  }
</style>
