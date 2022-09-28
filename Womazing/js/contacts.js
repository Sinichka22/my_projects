/*sticky navigation*/
/*
$(window).on('scroll', function () {
    const scroll = $(window).scrollTop()
    if (scroll < 400) {
      $('.navigation').removeClass('sticky')
    } else {
      $('.navigation').addClass('sticky')
    }
  })
/
  /*Hamburger*/
  /*
const menuBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-roll')
const closeMobileMenu = document.querySelector('.menu-close')

menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')
})
  
function closeMenu() {
    mobileMenu.classList.remove('active')
}
closeMobileMenu.addEventListener('click', closeMenu)
  
  /*modal one*/
  /*
const btnOpen = document.getElementById('open__btn')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
let btnClose = document.getElementById('close__btn')
  
btnOpen.addEventListener('click', function () {
    modal.classList.add('active')
})
  
function closeModal() {
    modal.classList.remove('active')
}
  
overlay.addEventListener('click', closeModal)
btnClose.addEventListener('click', closeModal)
*/

/*Map*/

ymaps.ready(init);
function init(){
    const myMap = new ymaps.Map("map", {
        center: [50.448554, 30.613507],
        zoom: 12,
        controls: ['zoomControl']
    },
 {
    searchControlProvider: 'yandex#search'
}),
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: '3-я улица Строителей, 25',
}, {   
    iconLayout: 'default#image',
    iconImageHref: '../img/mapsmark.svg',
    iconImageSize: [40, 52],
    iconImageOffset: [-5, -38]
})
myMap.geoObjects
.add(myPlacemark)
}

/*Validate*/

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
  },"Please check your input."
  );
  
  $(".contacts-form__main").validate({
  rules: {
    firstName: {
        required: true,
        regex : "[A-Za-z]{1,32}"   
    },
    email: {
      required: true,
      email: true,
    },
    phoneNumber: {
        digits : true,
     
        required: true,
        minlength: 10,
        maxlength: 11,
        regex: "[0-9]+"
    },
    message: {
        required: true,
    }
  },
  messages: {
    firstName: "Введите ваше имя правильно",
    email: 'Введите адрес электронной почты правильно',
    phoneNumber: "Введите ваш номер",
    message: "Оставьте сообщение"
  }
  });


