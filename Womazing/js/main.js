
/*slider one*/

const slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot'),
  slidesWrap = document.querySelectorAll('.slider-wrapper')

let index = 0

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove('active')
  }
  dots[n].classList.add('active')
}
  

const prepareCurrentSlide = (ind) => {
  activeSlide(ind)
  activeDot(ind)
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0
    prepareCurrentSlide(index)
  } else {
    index++
    prepareCurrentSlide(index)
  }
}
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    prepareCurrentSlide(index)
  } else {
    index--
    prepareCurrentSlide(index)
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot
    prepareCurrentSlide(index)
  })
})

const interval = setInterval(nextSlide, 2500)

/*slider two*/
const sliderSecond = document.querySelectorAll('.slider__second'),
sliderSecondWrap = document.querySelectorAll('.slider-wrapper_foto')

let indexForSecondSlider = 0

const activeSecondSlide = (n) => {
  for (slide of sliderSecond) {
    slide.classList.remove('active')
  }
  sliderSecond[n].classList.add('active')
}

const prepareCurrentSecondSlider = (ind) => {
  activeSecondSlide(ind)
}

const nextSecondSlide = () => {
  if (indexForSecondSlider == sliderSecond.length - 1) {
    indexForSecondSlider = 0
    prepareCurrentSecondSlider(indexForSecondSlider)
  } else {
    indexForSecondSlider++
    prepareCurrentSecondSlider(indexForSecondSlider)
  }
}
const prevSecondSlide = () => {
  if (indexForSecondSlider == 0) {
    indexForSecondSlider = sliderSecond.length - 1
    prepareCurrentSecondSlider(indexForSecondSlider)
  } else {
    indexForSecondSlider--
    prepareCurrentSecondSlider(indexForSecondSlider)
  }
}

const intervalSecondSlider = setInterval(nextSecondSlide, 2500)

/*sticky slider*/

$('.slide').each(function () {
  /* Основной слайдер */
  $(this)
    .find('.slide')
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      asNavFor: $(this).find('.slider__second'),
      dots: true,
    })

  /* Связанный слайдер */
  $(this)
    .find('.slider__second')
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: $(this).find('.slide'),
      dots: true,
    })
})

/*Slider*/
/*
const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 1000,
  slidesPerView: 1,
  loop: true,
  stopOnLastSlide: false,
  autoplay: {
    delay: 3000,
  },
})
*/







/*Scroll*/

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
})

/*
$(function(){

  $('.slide-btn__arrow-down').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.new-collection').offset().top }, 1000);
    e.preventDefault();
  });
  
  });
*/

/*slider Сomand*/


const prevСomand = document.getElementById('comand-btn-prev'),
  nextСomand = document.getElementById('comand-btn-next'),
  slidesСomand = document.querySelectorAll('.comand-slide'),
  dotsСomand = document.querySelectorAll('.comand-dot'),
  slidesСomandWrap = document.querySelectorAll('.comand-slider__wrapper')

let indexForSlidesСomand = 0

const activeSlideСomand = (n) => {
  for (slide of slidesСomand) {
    slide.classList.remove('active')
  }
  slidesСomand[n].classList.add('active')
}

const activeDotСomand = (n) => {
  for (dot of dotsСomand) {
    dot.classList.remove('active')
  }
  dotsСomand[n].classList.add('active')
}

const prepareCurrentSlideСomand = (ind) => {
  activeSlideСomand(ind)
  activeDotСomand(ind)
}

const nextSlideСomand = () => {
  if (indexForSlidesСomand == slidesСomand.length - 1) {
    indexForSlidesСomand = 0
    prepareCurrentSlideСomand(indexForSlidesСomand)
  } else {
    indexForSlidesСomand++
    prepareCurrentSlideСomand(indexForSlidesСomand)
  }
}
const prevSlideСomand = () => {
  if (indexForSlidesСomand == 0) {
    indexForSlidesСomand = slidesСomand.length - 1
    prepareCurrentSlideСomand(indexForSlidesСomand)
  } else {
    indexForSlidesСomand--
    prepareCurrentSlideСomand(indexForSlidesСomand)
  }
}

dotsСomand.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    indexForSlidesСomand = indexDot
    prepareCurrentSlideСomand(indexForSlidesСomand)
  })
})

nextСomand.addEventListener('click', nextSlideСomand)
prevСomand.addEventListener('click', prevSlideСomand)





