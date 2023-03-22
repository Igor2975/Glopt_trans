
$(document).ready(function(){
    $('.slider__wrapper').slick({
        speed: 1200,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></button>'
    });
});

 // ввод телефона

 $('input[name=phone]').mask("+7(999)-999-99-99");
  
// //Валидация
function validateForms (form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите ваше имя",
        phone: "Пожалуйста, введите ваш номер телефона",
        email: {
          required: "Пожалуйста, введите адрес почтового ящика",
          email: "Адрес почтового ящика введен неверно"
        }
      }
    });
  }

  validateForms('#request-form');
validateForms('#consult-form');
  
