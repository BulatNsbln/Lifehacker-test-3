const slider = {
    name: 'SliderItem',

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
      }
    },

    props: {
      'sliderList': {
        type: Array,
        required: true
      }
    },

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

export default slider;
