console.log(divide(4, 2));
console.log(divide(34, 2));
console.log();

$(function () {

  $(".burger").on('click', function(){
    $(".header__menu").toggleClass("active");
  }); 

  $('.intro__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    centerPadding: 0,
    variableWidth: false,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  $('.slider-top').slick({
    // centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    useTransform: false,
    variableWidth: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-bottom').slick({
    // centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    useTransform: false,
    variableWidth: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
    // prevArrow: <div class="prev-arrow"></div>,
    // nextArrow: <div class="next-arrow"></div>,
  });

  //  $(".test").on('click', function(){
  //    $(".test").toggleClass("active");
  //  }); 
  // додбавление класса

//----------------------------------

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // });
  // Для бургера!

//----------------------------------

  //   $('.class').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // });
  // Обычный одиночный слайдер!

//----------------------------------

  //  $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });
  // Двойной слайдер!

//----------------------------------

  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); 
  //Для табов!

  //----------------------------------
});