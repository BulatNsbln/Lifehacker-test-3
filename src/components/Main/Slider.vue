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
        <button class="slider__nav-toggle_circle" v-for='slide in sliderList' v-on:click='openSlide(slide.id)'></button>
      </div>
    </nav>

    <div class='slider__container'>
      <ul class="slider__list" v-bind:style='{left: sliderOffsetLeft + "px"}'>
        <li class="slider__slide" v-for='slide in sliderList'>
          <img class="slider__slide-image" :src="`${slide.img}`">
          <div class="slider__slide-description" v-html="`${slide.text}`"></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Slider',
    data () {
      return {
        // Всего слайдов
        sliderAllCount: 0,
        // Номер активного слайда
        sliderActive: 1,
        // Отступ тела со слайдами в контейнере
        sliderOffsetLeft: 0,
        // Шаг одного слайда = его длина
        sliderOffsetStep: 0,
        // Список изображений
        sliderList: this.sliderList
      }
    },
    props: [
      'sliderList'
    ],
    methods: {
      // Иницилизация слайдера
      initSlider: function () {
        let sliderBody = this.$el.querySelector('.slider__container');
        let sliderSlidies = sliderBody.querySelectorAll('.slider__slide');
        this.sliderOffsetStep = sliderBody.clientWidth;
        this.sliderAllCount = sliderSlidies.length;
      },

      // Открыть слайд по номеру
      openSlide: function (id) {
        if (id > 0 && id <= this.sliderAllCount) {
          this.sliderActive = id;
          this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
        }
      },

      // Следующий слайд
      nextSlide: function () {
        if (this.sliderActive < this.sliderAllCount) {
          this.sliderActive += 1;
          this.openSlide(this.sliderActive);
        }
      },

      // Предыдущий слайд
      prevSlide: function () {
        if (this.sliderActive > 1) {
          this.sliderActive -= 1;
          this.openSlide(this.sliderActive);
        }
      }
    },

    mounted () {
      this.initSlider();
      // Перенастройка слайдера при изменении размера окна
      window.addEventListener('resize', () => {
        this.initSlider();
        this.openSlide(this.sliderActive);
      })
    }
  };
</script>

<style lang="scss" scoped>

  .slider {
    position: relative;
    width: 320px;
    height: 528px;
    background-color: #111111;
  }
  .slider__nav-wrapper {
    position: absolute;
    bottom: 10px;
    left: 100px;
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
    &_circle {
      margin: 0;
      padding: 0;
      z-index: 1;
      cursor: pointer;
      background: none;
      border: none;
      outline: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #db4696;
      &:hover {
        background-color: #ffffff;
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
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    transition: all .5s ease;
  }
  .slider__slide {
    display: flex;
    flex-direction: column;
    margin: 0 26.5px;
    margin-top: 44px;
  }
  .slider__slide-image {
    width: 61px;
    height: 103px;
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .slider__slide-description {
    width: 267px;
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
    width: 320px;
    overflow: hidden;
  }

  @media (min-width: $tablet-width) {
    .slider {
      width: $tablet-width;
      height: 311px;
    }
    .slider__container {
      width: $tablet-width;
    }
    .slider__slide {
      flex-direction: row;
      align-items: center;
      margin: 80px 115px;
    }
    .slider__slide-description {
      width: 440px;
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
    .slider__slide-description {
      width: 574px;
      height: 156px;
      font-size: 18px;
      line-height: 26px;
      margin-left: 90px;
    }
  }
</style>
