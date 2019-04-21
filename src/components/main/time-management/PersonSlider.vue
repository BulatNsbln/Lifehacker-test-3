<template>
  <div class="slider">
    <nav class="slider__nav">
      <div class="slider__nav-wrapper">
        <button class="slider__nav-toggle-dot" v-for='slide in sliderList' v-on:click='openSlide(slide.id)'></button>
      </div>
    </nav>

    <div class='slider__container'>
      <ul class="slider__list" v-bind:style='{left: sliderOffsetLeft + "px"}'>
        <li class="slider__slide" v-for='slide in sliderList' :key="slide.id">
          <div class="slider__slide-container" v-bind:style='"background-image: url(" + slide.img + ")"'>
            <h1 class="slider__slide-quote" v-html="slide.quote"></h1>
            <h5 class="slider__slide-name">{{slide.peopleName}}</h5>
            <p class="slider__slide-description">{{slide.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Slider from '../../Slider';

  export default new Slider();
</script>

<style lang="scss" scoped>
  .slider {
    position: relative;
    width: 320px;
    height: 481px;
  }
  .slider__nav-wrapper {
    position: absolute;
    bottom: 20px;
    left: 115px;
    z-index: 5;
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
  .slider__list {
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    transition: all .5s ease;
    display: flex;
  }
  .slider__container {
    width: 320px;
    overflow: hidden;
  }
  .slider__slide {
    list-style: none;
  }
  .slider__slide-container {
    width: 320px;
    height: 481px;
    background-size: cover;
    position: relative;
    background-position-x: -45px;
    filter: grayscale(100%);
  }
  .slider__slide-quote {
    position: absolute;
    margin: 0;
    padding: 0;
    bottom: 150px;
    margin-left: 30px;
    color: #ffffff;
    font-family: "Oswald";
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-transform: uppercase;
  }
  .slider__slide-name {
    position: absolute;
    margin: 0;
    padding: 0;
    bottom: 120px;
    margin-left: 30px;
    width: 164px;
    height: 19px;
    color: #ffffff;
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
    margin-left: 30px;
    color: #ffffff;
    font-family: Arial;
    font-size: 14px;
  }
  @media only screen and (min-width: $tablet-width) {
    .slider {
      width: $tablet-width;
      height: 431px;
    }
    .slider__nav-wrapper {
      position: absolute;
      bottom: 23px;
      left: 359px;
    }
    .slider__container {
      width: $tablet-width;
    }
    .slider__slide-container {
      width: $tablet-width;
      height: 431px;
      background-position-x: 0;
    }
    .slider__slide-quote {
      position: absolute;
      margin-left: 485px;
      bottom: 225px;
    }
    .slider__slide-name {
      position: absolute;
      margin-left: 485px;
      bottom: 175px;
    }
    .slider__slide-description {
      position: absolute;
      margin-left: 485px;
      bottom: 115px;
    }
  }
  @media only screen and (min-width: $desktop-width) {
    .slider {
      display: none;
    }
  }
</style>
