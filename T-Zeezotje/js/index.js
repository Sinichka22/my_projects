const burgerBtn = document.querySelector("#burger-btn");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#overlay");

const burgerMenu = document.querySelector("#nav, #tel").cloneNode(1);

burgerBtn.addEventListener("click", burgerHandler);
overlay.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();  
  popup.classList.toggle("open");
  overlay.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  renderPopup();

  const linkPopups = document.querySelectorAll("#popup li");

  for (i = 0; i < linkPopups.length; i++) {
    linkPopups[i].addEventListener("click", btnClick);
  }
}

function btnClick() {
  setTimeout(closeOnClick, 800);
}

function renderPopup() {
  popup.appendChild(burgerMenu);
}

function closeOnClick() {
  popup.classList.remove("open");
  burgerBtn.classList.remove("active");
  overlay.classList.remove("active");
}


/*Slider reviews*/
const prevReviews = document.getElementById('reviews-btn-prev'),
  nextReviews = document.getElementById('reviews-btn-next'),
  slidesReviews = document.querySelectorAll('.reviews-slide'),
  slidesReviewsWrap = document.querySelectorAll('.reviews-slider__wrapper')

let indexForSlidesReviews = 0

const activeSlideReviews = (n) => {
  for (slide of slidesReviews) {
    slide.classList.remove('active')
  }
  slidesReviews[n].classList.add('active')
}

const prepareCurrentSlideReviews = (ind) => {
  activeSlideReviews(ind)
}

const nextSlideReviews = () => {
  if (indexForSlidesReviews == slidesReviews.length - 1) {
    indexForSlidesReviews = 0
    prepareCurrentSlideReviews(indexForSlidesReviews)
  } else {
    indexForSlidesReviews++
    prepareCurrentSlideReviews(indexForSlidesReviews)
  }
}
const prevSlideReviews = () => {
  if (indexForSlidesReviews == 0) {
    indexForSlidesReviews = slidesReviews.length - 1
    prepareCurrentSlideReviews(indexForSlidesReviews)
  } else {
    indexForSlidesReviews--
    prepareCurrentSlideReviews(indexForSlidesReviews)
  }
}

nextReviews.addEventListener('click', nextSlideReviews)
prevReviews.addEventListener('click', prevSlideReviews)

//const interval = setInterval(nextSlideReviews, 3000)


/*Slider interior*/

const swiperInterior = new Swiper('.interior .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1.5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,

  loop: true,
  stopOnLastSlide: false,
  /*autoplay: {
    delay: 2000,
  },*/

})

const prevInterior = document.getElementById('interior-btn-prev')
const nextInterior = document.getElementById('interior-btn-next')

const nextSlideInterior = () => {
  swiperInterior.slideNext()
}
const prevSlideInterior = () => {
  swiperInterior.slidePrev()
}

nextInterior.addEventListener('click', nextSlideInterior)
prevInterior.addEventListener('click', prevSlideInterior)


/*modal-window*/

const btnOpen = document.getElementById('open__btn')
const modal = document.getElementById('modal')
const modalOverlay = document.getElementById('modal__overlay')
const btnClose = document.getElementById('close__btn')

btnOpen.addEventListener('click', function () {
  modal.classList.add('active')
  const btnSend = document.getElementById('form-call')
  btnSend.addEventListener('submit', sendForm)
  document.getElementById('email').value = ""
  document.getElementById('phone').value = ""
  document.getElementById('first-name').value = ""
  
})

function closeModal() {
  modal.classList.remove('active')
}

modalOverlay.addEventListener('click', closeModal)
btnClose.addEventListener('click', closeModal)

/*form*/
const btnOpenForm = document.getElementById('contacts-send__btn')
const submitSend = document.getElementById('form-contacts')
submitSend.addEventListener('submit', submitForm)
  


function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById('e-mail')
  const message = document.getElementById('message')
  const name = document.getElementById('name')
  
  let resValidateName = validateName(name)
  if(!resValidateName){
    return;
  }

  let resValidateEmail = validateEmail(email)
  if(!resValidateEmail){
    return;
  }

  let resValidateMessage = validateMessage(message)
  if(!resValidateMessage){
    return;
  }
   
  post('some backend URL for post request', {'name':name.value, 'e-mail':email.value, 'message':message.value})

  document.getElementById('e-mail').value = ""
  document.getElementById('message').value = ""
  document.getElementById('name').value = ""
}


/*forma modal-window*/

function sendForm(event) {
  event.preventDefault();
  const email = document.getElementById('email')
  const number = document.getElementById('phone')
  const name = document.getElementById('first-name')
  
  let resValidateName = validateName(name)
  if(!resValidateName){
    return;
  }

  let resValidateEmail = validateEmail(email)
  if(!resValidateEmail){
    return;
  }

  let resValidatePhoneNumber = validatePhoneNumber(number)
  if(!resValidatePhoneNumber){
    return;
  }
   
  post('some backend URL for post request', {'name':name.value, 'email':email.value, 'number':number.value})
}

/*Map*/

function mapInitialization(){
  try {
    ymaps.ready(init);
    function init(){
      const myMap = new ymaps.Map("map", {
          center: [51.008176, 3.628080], 
          zoom: 12,
          controls: ['zoomControl']
        },
      {
          searchControlProvider: 'yandex#search'
      }),
      myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [51.008176, 3.628080]
        },
        properties: {
            iconContent: 'Hooglatemweg 2, 9830 Sint-martens-Latem'
        }
      }, {
        preset: 'islands#blackStretchyIcon',
        iconColor: 'red',
        draggable: false
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Hooglatemweg 2, 9830 Sint-martens-Latem',
      }, {   
          iconLayout: 'default#image',
          iconImageHref: '../images/mark.svg',
          iconImageSize: [50, 50],
          iconImageOffset: [-5, -38]
      })

      myMap.geoObjects
      .add(myGeoObject)
      .add(myPlacemark)
      }
  } catch (error) {
    /*document.getElementById("map-img").src = "path/to/map-location.jpg";*/
    let mapImg = document.getElementById("map-img")

    mapImg.classList.add('active');


  }
}
mapInitialization();
















