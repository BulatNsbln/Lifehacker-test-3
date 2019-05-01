<template lang="pug">
  .slider
    nav.slider__nav
      .slider__nav-wrapper
        button(
          class="slider__nav-toggle-dot"
          v-for='slide in sliderList'
          @click='openSlide(slide.id)'
        )

    .slider__container
      ul(
        class="slider__list"
        :style='{left: sliderOffsetLeft + "px"}'
      )
        li(
          class="slider__slide"
          v-for='slide in sliderList'
          :key="slide.id"
        )
          div(
            class="slider__slide-container"
            :style='"background-image: url(" + slide.img + ")"'
          )
            h1(
              class="slider__slide-quote"
              v-html="slide.quote"
            )
            h5.slider__slide-name {{slide.peopleName}}
            p.slider__slide-description {{slide.description}}
</template>

<script>
  import slider from './Slider';

  export default {
    mixins: [slider]
  }
</script>

<style lang="scss" scoped>
  .slider {
    position: relative;

    width: 100%;
    min-width: 320px;
    height: 481px;
  }
  .slider__nav-wrapper {
    position: absolute;
    bottom: 20px;
    left: 36%;

    z-index: 5;
  }
  .slider__nav-toggle-dot {
    width: 10px;
    height: 10px;
    margin: 0;
    margin-right: 15px;
    padding: 0;

    z-index: 2;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: $color-pink-near;

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
  .slider__list {
    position: relative;

    display: flex;

    width: 400%;
    padding: 0;
    margin: 0;

    transition: all .5s ease;
  }
  .slider__container {
    width: 100%;
    min-width: 320px;

    overflow: hidden;
  }
  .slider__slide {
    width: 100%;

    list-style: none;
  }
  .slider__slide-container {
    position: relative;

    width: 100%;
    min-width: 320px;
    height: 481px;

    background-size: cover;
    background-position-x: -45px;
    filter: grayscale(100%);
  }
  .slider__slide-quote {
    position: absolute;
    bottom: 150px;

    margin: 0;
    padding: 0;
    margin-left: 9%;

    color: $color-white;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-transform: uppercase;
  }
  .slider__slide-name {
    position: absolute;
    bottom: 120px;

    width: 164px;
    height: 19px;
    margin: 0;
    margin-left: 9%;
    padding: 0;

    color: $color-white;
    font-family: Arial;
    font-size: 16px;
    font-weight: 700;
  }
  .slider__slide-description {
    position: absolute;
    bottom: 57px;

    width: 317px;
    height: 33px;
    margin-top: 10px;
    margin-left: 9%;

    color: $color-white;
    font-family: Arial;
    font-size: 14px;
  }
  @media (min-width: 410px) {
    .slider__slide-container {
      background-position-x: 0;
    }
    .slider__slide-quote,
    .slider__slide-name,
    .slider__slide-description {
      margin-left: 40%;
    }
  }
  @media (min-width: $tablet-width) {
    .slider {
      width: 100%;
      height: 431px;
    }
    .slider__nav-wrapper {
      position: absolute;
      bottom: 23px;
      left: 45%;
    }
    .slider__container {
      width: 100%;
    }
    .slider__slide-container {
      width: 100%;
      height: 431px;

      background-position-x: 0;
    }
    .slider__slide-quote {
      position: absolute;
      bottom: 225px;

      margin-left: 61%;
    }
    .slider__slide-name {
      position: absolute;
      bottom: 175px;

      margin-left: 61%;
    }
    .slider__slide-description {
      position: absolute;
      bottom: 115px;

      margin-left: 61%;
    }
  }
  @media (min-width: 950px) {
    .slider__nav-wrapper {
      left: 50%;
    }
  }
  @media (min-width: $desktop-width) {
    .slider {
      display: none;
    }
  }
</style>
