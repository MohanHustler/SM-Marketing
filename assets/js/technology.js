$(document).ready(function () {

  $(window).trigger('resize'); 


  // Technology stack
  var pageURL = $(location).attr("href");

  var str1 = "battery";
  if(pageURL.indexOf(str1) != -1){

    $(".collapse-tap .dropdown-menu li.battery").addClass('color');
    $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
    $(".collapse-tap .dropdown-menu li.network").removeClass('color');
    $(".collapse-tap .dropdown-menu li.driver").removeClass('color');
    $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
    $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
    $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');


    $(".interchange-desc").addClass('hide'); 
    $(".battery-desc").removeClass('hide'); 
    $(".network-desc").addClass('hide'); 
    $(".interchange-desc").addClass('hide'); 
    $(".driver-desc").addClass('hide'); 
    $(".plug-desc").addClass('hide'); 
    $(".bus-battery-desc").addClass('hide'); 
    $(".bus-interchange-desc").addClass('hide'); 
    
  }

  var pageURL1 = $(location).attr("href");
  var str2 = "interchange";
  if(pageURL1.indexOf(str2) != -1){
    $(".collapse-tap .dropdown-menu li.interchange").addClass('color');
    $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
$(".collapse-tap .dropdown-menu li.network").removeClass('color');
$(".collapse-tap .dropdown-menu li.driver").removeClass('color'); 
$(".collapse-tap .dropdown-menu li.plug").removeClass('color');
$(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
$(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');

$(".interchange-desc").removeClass('hide'); 
$(".battery-desc").addClass('hide'); 
$(".network-desc").addClass('hide'); 
$(".driver-desc").addClass('hide'); 
$(".plug-desc").addClass('hide'); 
$(".bus-battery-desc").addClass('hide'); 
$(".bus-interchange-desc").addClass('hide'); 
  }

  var pageURL2 = $(location).attr("href");
  var str3 = "plug";
  if(pageURL2.indexOf(str3) != -1){

    $(".collapse-tap .dropdown-menu li.driver").removeClass('color'); 
    $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
    $(".collapse-tap .dropdown-menu li.network").removeClass('color');
    $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
    $(".collapse-tap .dropdown-menu li.plug").addClass('color');
    $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
    $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');

    $(".interchange-desc").addClass('hide'); 
    $(".battery-desc").addClass('hide'); 
    $(".network-desc").addClass('hide'); 
    $(".driver-desc").addClass('hide'); 
    $(".plug-desc").removeClass('hide'); 
    $(".bus-battery-desc").addClass('hide'); 
    $(".bus-interchange-desc").addClass('hide'); 
  
  }

  var pageURL3 = $(location).attr("href");
  var str4 = "smart";
  if(pageURL3.indexOf(str4) != -1){

    $(".collapse-tap .dropdown-menu li.network").addClass('color'); 
    $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
    $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
    $(".collapse-tap .dropdown-menu li.driver").removeClass('color');
    $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
    $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
    $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');

    $(".interchange-desc").addClass('hide'); 
    $(".battery-desc").addClass('hide'); 
    $(".network-desc").removeClass('hide'); 
    $(".driver-desc").addClass('hide'); 
    $(".plug-desc").addClass('hide'); 
    $(".bus-battery-desc").addClass('hide'); 
    $(".bus-interchange-desc").addClass('hide'); 
    $(".technology-collapse-section .collapse-tap ul li").removeClass("active");
    $(".core").addClass('active');
  
  }

  // dropdown hover
  // if ($(window).width() > 767) {
    $( ".dropdown-menu" ).css('margin-top',-5);
    $( ".dropdown" )
    .mouseover(function() {
      $( this ).addClass('show').attr('aria-expanded',"true");
      $( this ).find('.dropdown-menu').addClass('show');
    })
    .mouseout(function() {
      $( this ).removeClass('show').attr('aria-expanded',"false");
      $( this ).find('.dropdown-menu').removeClass('show');
    });

    $('.dropdown-menu li').click(function () {
      $( ".technology-collapse-section .dropdown" ).removeClass('show').attr('aria-expanded',"false");
      $( ".technology-collapse-section .dropdown" ).find('.dropdown-menu').removeClass('show');
    });
// }


    $('.driver-list-section ul li').click(function () {
      var drivertabs = $(this).attr('data-app');
      console.log(drivertabs)
      $('.driver-list-section ul li').removeClass('active');
      $(this).addClass('active');
      $('.app-content .content').addClass('hide');
      $('.' + drivertabs).removeClass('hide');
      // slick recall
      $('.driver-image-section').slick('unslick');
      $(".driver-image-section").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        autoplay: false,
        slidesToScroll: 1,
        arrows: true,
        nextArrow:
          '<div class="slick-right"><img src="assets/images/technology/tech-right.svg"></div>',
        prevArrow:
          '<div class="slick-left"><img src="assets/images/technology/tech-left.svg"></div>',
      });
    });


    $('.technology-right .list ul li').click(function () {
      var techtabs = $(this).attr('data-tab');
      console.log(techtabs)
      $('.technology-right .list ul li').removeClass('active');
      $(this).addClass('active');
      $('.list-video .image').addClass('hide');
      $('.' + techtabs).removeClass('hide');
    });
  
    $(".technology-right ul li").click(function () {
      $(".technology-right ul li").removeClass("active");
      $(this).addClass("active");  
    });
  
    $(".technology-collapse-section .collapse-tap ul li").click(function () {
  
      $(".technology-collapse-section .collapse-tap ul li").removeClass("active");
      $(this).addClass("active");  
    });
  

  
    $(".collapse-tap .dropdown-menu li.battery").click(function () {
      $(".collapse-tap .dropdown-menu li.battery").addClass('color');
      $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
      $(".collapse-tap .dropdown-menu li.network").removeClass('color');
      $(".collapse-tap .dropdown-menu li.driver").removeClass('color');
      $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
      $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');

  
      $(".interchange-desc").addClass('hide'); 
      $(".battery-desc").removeClass('hide'); 
      $(".network-desc").addClass('hide'); 
      $(".interchange-desc").addClass('hide'); 
      $(".driver-desc").addClass('hide'); 
      $(".plug-desc").addClass('hide'); 
      $(".bus-battery-desc").addClass('hide'); 
      $(".bus-interchange-desc").addClass('hide'); 

      
        // $('ul.dropdown-menu').stop(true,true).slideUp('fast');


  
    });
  
    $(".collapse-tap .dropdown-menu li.interchange").click(function () {
      $(".collapse-tap .dropdown-menu li.interchange").addClass('color');
          $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.network").removeClass('color');
      $(".collapse-tap .dropdown-menu li.driver").removeClass('color'); 
      $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
      $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');
  
      $(".interchange-desc").removeClass('hide'); 
      $(".battery-desc").addClass('hide'); 
      $(".network-desc").addClass('hide'); 
      $(".driver-desc").addClass('hide'); 
      $(".plug-desc").addClass('hide'); 
      $(".bus-battery-desc").addClass('hide'); 
      $(".bus-interchange-desc").addClass('hide'); 
      // $('ul.dropdown-menu').stop(true,true).slideUp('fast');
  
    });
  
  
    $(".collapse-tap .dropdown-menu li.network").click(function () {
      $(".collapse-tap .dropdown-menu li.network").addClass('color'); 
      $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
      $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.driver").removeClass('color');
      $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
      $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');
  
      $(".interchange-desc").addClass('hide'); 
      $(".battery-desc").addClass('hide'); 
      $(".network-desc").removeClass('hide'); 
      $(".driver-desc").addClass('hide'); 
      $(".plug-desc").addClass('hide'); 
      $(".bus-battery-desc").addClass('hide'); 
      $(".bus-interchange-desc").addClass('hide'); 
      // $('ul.dropdown-menu').stop(true,true).slideUp('fast');
  
    });
  

    $(".collapse-tap .dropdown-menu li.busbattery").click(function () {
        $(".collapse-tap .dropdown-menu li.network").removeClass('color'); 
        $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
        $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
        $(".collapse-tap .dropdown-menu li.driver").removeClass('color');
        $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
        $(".collapse-tap .dropdown-menu li.busbattery").addClass('color');
        $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');
    
        $(".interchange-desc").addClass('hide'); 
        $(".battery-desc").addClass('hide'); 
        $(".network-desc").addClass('hide'); 
        $(".driver-desc").addClass('hide'); 
        $(".plug-desc").addClass('hide'); 
        $(".bus-battery-desc").removeClass('hide'); 
        $(".bus-interchange-desc").addClass('hide'); 
        // $('ul.dropdown-menu').stop(true,true).slideUp('fast');
    
    });



    $(".collapse-tap .dropdown-menu li.businterchange").click(function () {
        $(".collapse-tap .dropdown-menu li.network").removeClass('color'); 
        $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
        $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
        $(".collapse-tap .dropdown-menu li.driver").removeClass('color');
        $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
        $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
        $(".collapse-tap .dropdown-menu li.businterchange").addClass('color');
    
        $(".interchange-desc").addClass('hide'); 
        $(".battery-desc").addClass('hide'); 
        $(".network-desc").addClass('hide'); 
        $(".driver-desc").addClass('hide'); 
        $(".plug-desc").addClass('hide'); 
        $(".bus-battery-desc").addClass('hide'); 
        $(".bus-interchange-desc").removeClass('hide');
        // $('ul.dropdown-menu').stop(true,true).slideUp('fast'); 
    
    });

    $(".collapse-tap .dropdown-menu li.driver").click(function () {
      $(window).trigger('resize'); 
      $(".collapse-tap .dropdown-menu li.driver").addClass('color'); 
      $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
      $(".collapse-tap .dropdown-menu li.network").removeClass('color');
      $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.plug").removeClass('color');
      $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');
  
      $(".interchange-desc").addClass('hide'); 
      $(".battery-desc").addClass('hide'); 
      $(".network-desc").addClass('hide'); 
      $(".driver-desc").removeClass('hide'); 
      $(".plug-desc").addClass('hide'); 
      $(".bus-battery-desc").addClass('hide'); 
      $(".bus-interchange-desc").addClass('hide'); 
      // $('ul.dropdown-menu').stop(true,true).slideUp('fast');

      // slick recall
      $('.driver-image-section').slick('unslick');
      $(".driver-image-section").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        autoplay: false,
        slidesToScroll: 1,
        arrows: true,
        nextArrow:
          '<div class="slick-right"><img src="assets/images/technology/tech-right.svg"></div>',
        prevArrow:
          '<div class="slick-left"><img src="assets/images/technology/tech-left.svg"></div>',
      });

      $(window).trigger('resize'); 
      // $('#addressList').css('display', 'block'); 
      // $('#addressList').slick('setPosition');
  
  
    });
  
  
    $(".collapse-tap .dropdown-menu li.plug").click(function () {
      $(".collapse-tap .dropdown-menu li.driver").removeClass('color'); 
      $(".collapse-tap .dropdown-menu li.interchange").removeClass('color');
      $(".collapse-tap .dropdown-menu li.network").removeClass('color');
      $(".collapse-tap .dropdown-menu li.battery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.plug").addClass('color');
      $(".collapse-tap .dropdown-menu li.busbattery").removeClass('color');
      $(".collapse-tap .dropdown-menu li.businterchange").removeClass('color');
  
      $(".interchange-desc").addClass('hide'); 
      $(".battery-desc").addClass('hide'); 
      $(".network-desc").addClass('hide'); 
      $(".driver-desc").addClass('hide'); 
      $(".plug-desc").removeClass('hide'); 
      $(".bus-battery-desc").addClass('hide'); 
      $(".bus-interchange-desc").addClass('hide'); 
      // $('ul.dropdown-menu').stop(true,true).slideUp('fast');
  
  
    });
   
    // Driver Application
    $(".driver-image-section").slick({
      infinite: true,
      slidesToShow: 1,
      dots: true,
      autoplay: false,
      slidesToScroll: 1,
      arrows: true,
      nextArrow:
        '<div class="slick-right"><img src="assets/images/technology/tech-right.svg"></div>',
      prevArrow:
        '<div class="slick-left"><img src="assets/images/technology/tech-left.svg"></div>',
    });

    // if ($(window).width() < 767) {
    //   // List Slider
    //   $('.mob-slider').slick({
    //     infinite:true,
    //     arrows: false,
    //     dots: false,
    //     autoplay: false,
    //     speed: 800,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   });
    // }
  
   });
  
  