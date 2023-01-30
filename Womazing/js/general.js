/*sticky navigation*/

$(window).on('scroll', function () {
    const scroll = $(window).scrollTop()
    if (scroll < 300) {
      $('.navigation').removeClass('sticky')
    } else {
      $('.navigation').addClass('sticky')
    }
  })
  
  /*Hamburger*/
  
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
  const btnOpen = document.getElementById('open__btn')
  const modal = document.getElementById('modal')
  const overlay = document.getElementById('overlay')
  var btnClose = document.getElementById('close__btn')
  
  btnOpen.addEventListener('click', function () {
    modal.classList.add('active')
  })
  
  function closeModal() {
    modal.classList.remove('active')
  }
  
  overlay.addEventListener('click', closeModal)
  btnClose.addEventListener('click', closeModal)
  
  /*modal two*/
  
  /*
  const btnOpenTwo = document.getElementById('open-two__btn');
  const modalTwo = document.getElementById('modal-two');
  
  
  btnOpenTwo.addEventListener('click',function(){
      modalTwo.classList.add('active');
  });
  
  function closeModal(){
      modalTwo.classList.remove('active');
  }
  
  overlay.addEventListener('click',closeModal);
  
  */

  
  
/*Validate*/

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
  },"Please check your input."
  );
  
  $(".form-call").validate({
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
    }
  },
  messages: {
    firstName: "Введите ваше имя правильно",
    email: 'Введите адрес электронной почты правильно',
    phoneNumber: "Введите ваш номер",
    
  }
  });