<template>
  <section class="slider">
    <nav class="slider__nav">
      <div class="slider__nav-wrapper">
        <button class="slider__nav-toggle-dot" v-for='slide in sliderList' v-on:click='openSlide(slide.id)'></button>
      </div>
    </nav>

    <div class='slider__container'>
      <ul class="slider__list" v-bind:style='{left: sliderOffsetLeft + "px"}'>
        <li class="slider__slide" v-for='slide in sliderList'>
          <div class="slider__slide-container" v-bind:style='"background-image: url(" + slide.img + ")"'>
            <h1 v-html="`${slide.quote}`"></h1>
            <h5 v-html="`${slide.peopleName}`"></h5>
            <p v-html="`${slide.description}`"></p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script src="../../Slider.js">
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

        let dots = this.$el.querySelectorAll('.slider__nav-toggle-dot');
        dots.item(0).classList.add('slider__nav-toggle-dot_active');
      },

      // Открыть слайд по номеру
      openSlide: function (id) {
        if (id > 0 && id <= this.sliderAllCount) {
          this.sliderActive = id;
          this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep);

          let dots = this.$el.querySelectorAll('.slider__nav-toggle-dot');
          dots.forEach( dot => dot.classList.remove('slider__nav-toggle-dot_active') );
          dots.item(id-1).classList.add('slider__nav-toggle-dot_active');
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
    height: 481px;
  }
  .slider__nav-wrapper {
    position: absolute;
    bottom: 48px;
    left: 80px;
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
  .slider__slide-container {
    width: 320px;
    height: 481px;
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
      margin: 80px 115px 0 115px;
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
  .slider__nav-wrapper {
    bottom: 44px;
    left: 320px;
  }
  }
  @media (min-width: $desktop-width) {
    .slider {
      display: none;
    }
  }
</style>
