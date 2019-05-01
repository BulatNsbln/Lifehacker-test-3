<template lang="pug">
  section.slider
    nav.slider__nav
      button(
        type="button"
        class="slider__nav-toggle slider__nav-toggle_prev"
        v-on:click='prevSlide'
      )
        svg(class="slider__nav-toggle_image slider__nav-toggle_image-prev"  viewBox="0 0 26 46")
          defs
            path(id="st66a" d="M541 211a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-27v27a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-30a1 1 0 0 1 1-1z")
          g
            g(transform="rotate(-45 18.25 732.175)")
              use(xlink:href="#st66a")
      button(
        type="button"
        class="slider__nav-toggle slider__nav-toggle_next"
        v-on:click='nextSlide'
      )
        svg(class="slider__nav-toggle_image slider__nav-toggle_image-next"  viewBox="0 0 26 46")
          defs
            path(id="st66a" d="M541 211a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-27v27a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-30a1 1 0 0 1 1-1z")
          g
            g(transform="rotate(-45 18.25 732.175)")
              use(xlink:href="#st66a")

      .slider__nav-wrapper
        button(
          class="slider__nav-toggle-dot"
          v-for='slide in sliderList'
          @click='openSlide(slide.id)'
          :key="slide.id"
        )

    .slider__container
      ul(
        class="slider__list"
        v-bind:style='{left: sliderOffsetLeft + "px"}'
      )
        li(
          class="slider__slide"
          v-for='slide in sliderList'
          :key="slide.id"
        )
          img(
            class="slider__slide-image"
            :src="`${slide.img}`"
            alt="Изображение сладера"
          )
          .slider__slide-text(v-html="`${slide.text}`")
</template>

<script>
  import Slider from './Slider';

  export default new Slider();
</script>

<style lang="scss" scoped>
  .slider {
    position: relative;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 528px;
    min-width: 320px;

    background-color: #111111;
  }
  .slider__nav-wrapper {
    position: absolute;
    bottom: 48px;
    left: 25%;
  }
  .slider__nav-toggle {
    position: absolute;

    z-index: 1;
    background: none;
    border: none;
    outline: none;

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
    width: 10px;
    height: 10px;

    margin: 0;
    padding: 0;

    z-index: 2;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: $color-pink-near;
    margin-right: 15px;

    &:hover {
      background-color: $color-white;
    }
    &_active {
      background: none;
      border: 1px solid $color-pink-near;
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
    fill: $color-pink-near;
    &:hover {
      fill: $color-white;
    }
  }
  .slider__nav-toggle_image-next {
    transform: rotate(180deg);
  }
  .slider__list {
    position: relative;

    display: flex;

    width: 700%;
    padding: 0;
    margin: 0;

    transition: all .5s ease;
  }
  .slider__slide {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 44px;
  }
  .slider__slide-image {
    display: block;

    width: 61px;
    height: 103px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .slider__slide-text {
    width: 83%;
    min-width: 267px;
    height: 264px;
    margin: 0 auto;

    color: $color-white;
    font-family: Arial;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
  .slider__list {
    display: flex;
  }
  .slider__container {
    width: 100%;
    min-width: 320px;

    overflow: hidden;
  }
  @media (min-width: 480px) {
    .slider__nav-wrapper {
      left: 40%;
    }
  }
  @media (min-width: $tablet-width) {
    .slider {
      width: 100%;
      height: 311px;
    }
    .slider__container {
      width: 100%;
    }
    .slider__slide {
      flex-direction: row;
      align-items: center;

      margin: 80px 115px 0 115px;
    }
    .slider__slide-text {
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
      left: 40%;
    }
  }
  @media (min-width: $desktop-width) {
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
