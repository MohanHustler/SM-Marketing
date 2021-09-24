$(document).ready(function () {
  // Co2 Blink
  setInterval(function () {
    $('.co2-section span img').addClass('blink-img');
  }, 6000);

  // News slider
  // $('.news-slider').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   nextArrow:
  //     '<div class="slick-right"><img src="assets/images/home/right.svg"></div>',
  //   prevArrow:
  //     '<div class="slick-left"><img src="assets/images/home/left.svg"></div>'
  // });

  // Client Slider
  $('.client-slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-right"><img src="assets/images/home/right.svg"></div>',
    prevArrow:
      '<div class="slick-left"><img src="assets/images/home/left.svg"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true
        }
      }
    ]
  });

  //ticking machine
  var percentTime1;
  var tick1;
  var time1 = 1;
  var clientBarIndex = 0;

  $('.clientBarContainer .clientBar').each(function (index) {
    var progress1 =
      "<div class='clientProgress clientProgress" + index + "'></div>";
    $(this).html(progress1);
  });

  function startProgressbar1() {
    resetProgressbar1();
    percentTime1 = 0;
    tick1 = setInterval(interval1, 10);
  }

  function interval1() {
    if (
      $(
        '.client-slider .slick-track div[data-slick-index="' +
          clientBarIndex +
          '"]'
      ).attr('aria-hidden') === 'true'
    ) {
      clientBarIndex = $(
        '.client-slider .slick-track div[aria-hidden="false"]'
      ).data('slickIndex');
      startProgressbar1();
    } else {
      if (clientBarIndex == 0) {
        // $('.logocolor0').addClass('active');
        $('.logo0 .client-logo-img').removeClass('gray0');
        $('.logo1 .client-logo-img').addClass('gray1');
        $('.logo2 .client-logo-img').addClass('gray2');
        $('.logo3 .client-logo-img').addClass('gray3');
        $('.logo4 .client-logo-img').addClass('gray4');
        $('.logo5 .client-logo-img').addClass('gray5');

        $('.up0').removeClass('hide');
        $('.up1').addClass('hide');
        $('.up2').addClass('hide');
        $('.up3').addClass('hide');
        $('.up4').addClass('hide');
        $('.up5').addClass('hide');
      }
      if (clientBarIndex == 1) {
        // $('.logocolor0').removeClass('active');
        // $('.logocolor1').addClass('active');
        $('.logo0 .client-logo-img').addClass('gray0');
        $('.logo1 .client-logo-img').removeClass('gray1');
        $('.logo2 .client-logo-img').addClass('gray2');
        $('.logo3 .client-logo-img').addClass('gray3');
        $('.logo4 .client-logo-img').addClass('gray4');
        $('.logo5 .client-logo-img').addClass('gray5');

        $('.up1').removeClass('hide');
        $('.up2').addClass('hide');
        $('.up3').addClass('hide');
        $('.up4').addClass('hide');
        $('.up5').addClass('hide');
        $('.up0').addClass('hide');
      }
      if (clientBarIndex == 2) {
        // $('.logocolor0').removeClass('active');
        // $('.logocolor1').removeClass('active');
        // $('.logocolor2').addClass('active');
        $('.logo0 .client-logo-img').addClass('gray0');
        $('.logo1 .client-logo-img').addClass('gray1');
        $('.logo2 .client-logo-img').removeClass('gray2');
        $('.logo3 .client-logo-img').addClass('gray3');
        $('.logo4 .client-logo-img').addClass('gray4');
        $('.logo5 .client-logo-img').addClass('gray5');

        $('.up2').removeClass('hide');
        $('.up3').addClass('hide');
        $('.up4').addClass('hide');
        $('.up5').addClass('hide');
        $('.up0').addClass('hide');
        $('.up1').addClass('hide');
      }
      if (clientBarIndex == 3) {
        // $('.logocolor0').removeClass('active');
        // $('.logocolor1').removeClass('active');
        // $('.logocolor2').removeClass('active');
        // $('.logocolor3').addClass('active');
        $('.logo0 .client-logo-img').addClass('gray0');
        $('.logo1 .client-logo-img').addClass('gray1');
        $('.logo2 .client-logo-img').addClass('gray2');
        $('.logo3 .client-logo-img').removeClass('gray3');
        $('.logo4 .client-logo-img').addClass('gray4');
        $('.logo5 .client-logo-img').addClass('gray5');

        $('.up3').removeClass('hide');
        $('.up4').addClass('hide');
        $('.up5').addClass('hide');
        $('.up0').addClass('hide');
        $('.up1').addClass('hide');
        $('.up2').addClass('hide');
      }
      if (clientBarIndex == 4) {
        // $('.logocolor0').removeClass('active');
        // $('.logocolor1').removeClass('active');
        // $('.logocolor2').removeClass('active');
        // $('.logocolor3').removeClass('active');
        // $('.logocolor4').addClass('active');
        $('.logo0 .client-logo-img').addClass('gray0');
        $('.logo1 .client-logo-img').addClass('gray1');
        $('.logo2 .client-logo-img').addClass('gray2');
        $('.logo3 .client-logo-img').addClass('gray3');
        $('.logo4 .client-logo-img').removeClass('gray4');
        $('.logo5 .client-logo-img').addClass('gray5');

        $('.up4').removeClass('hide');
        $('.up5').addClass('hide');
        $('.up0').addClass('hide');
        $('.up1').addClass('hide');
        $('.up2').addClass('hide');
        $('.up3').addClass('hide');
      }
      if (clientBarIndex == 5) {
        // $('.logocolor0').removeClass('active');
        // $('.logocolor1').removeClass('active');
        // $('.logocolor2').removeClass('active');
        // $('.logocolor3').removeClass('active');
        // $('.logocolor4').addClass('active');
        $('.logo0 .client-logo-img').addClass('gray0');
        $('.logo1 .client-logo-img').addClass('gray1');
        $('.logo2 .client-logo-img').addClass('gray2');
        $('.logo3 .client-logo-img').addClass('gray3');
        $('.logo4 .client-logo-img').addClass('gray4');
        $('.logo5 .client-logo-img').removeClass('gray5');

        $('.up5').removeClass('hide');
        $('.up0').addClass('hide');
        $('.up1').addClass('hide');
        $('.up2').addClass('hide');
        $('.up3').addClass('hide');
        $('.up4').addClass('hide');
      }
      if ($(window).width() < 767) {
        if (clientBarIndex == 0) {
          $('.logo0').removeClass('hide');
          $('.logo1').removeClass('hide');
          $('.logo2').addClass('hide');
          $('.logo3').addClass('hide');
          $('.logo4').addClass('hide');
          $('.logo5').addClass('hide');
        }
        if (clientBarIndex == 1) {
          $('.logo0').addClass('hide');
          $('.logo1').removeClass('hide');
          $('.logo2').removeClass('hide');
          $('.logo3').addClass('hide');
          $('.logo4').addClass('hide');
          $('.logo5').addClass('hide');
        }
        if (clientBarIndex == 2) {
          $('.logo0').addClass('hide');
          $('.logo1').addClass('hide');
          $('.logo2').removeClass('hide');
          $('.logo3').removeClass('hide');
          $('.logo4').addClass('hide');
          $('.logo5').addClass('hide');
        }
        if (clientBarIndex == 3) {
          $('.logo0').addClass('hide');
          $('.logo1').addClass('hide');
          $('.logo2').addClass('hide');
          $('.logo3').removeClass('hide');
          $('.logo4').removeClass('hide');
          $('.logo5').addClass('hide');
        }
        if (clientBarIndex == 4) {
          $('.logo0').addClass('hide');
          $('.logo1').addClass('hide');
          $('.logo2').addClass('hide');
          $('.logo3').addClass('hide');
          $('.logo4').removeClass('hide');
          $('.logo5').removeClass('hide');
        }
        if (clientBarIndex == 5) {
          $('.logo1').addClass('hide');
          $('.logo2').addClass('hide');
          $('.logo3').addClass('hide');
          $('.logo4').addClass('hide');
          $('.logo5').removeClass('hide');
          $('.logo0').removeClass('hide');
        }
      }

      percentTime1 += 1 / (time1 + 4);

      $('.clientProgress' + clientBarIndex).css({
        width: percentTime1 + '%'
      });
      if (percentTime1 >= 100) {
        $('.client-item').slick('slickNext');
        clientBarIndex++;
        if (clientBarIndex > 5) {
          $('.logocolor4').removeClass('active');
          clientBarIndex = 0;
        }
        startProgressbar1();
      }
    }
  }

  function resetProgressbar1() {
    $('.clientProgress').css({
      width: 0 + '%'
    });
    clearInterval(tick1);
  }
  startProgressbar1();
  // // End ticking machine

  $('.clientBarContainer .client-logo-section').click(function () {
    clearInterval(tick1);
    var goToThisIndex1 = $(this).find('span').data('slickIndex');
    $('.client-item').slick('slickGoTo', goToThisIndex1, false);

    if (goToThisIndex1 == 0) {
      $('.logo0 .client-logo-img').removeClass('gray0');
      $('.logo1 .client-logo-img').addClass('gray1');
      $('.logo2 .client-logo-img').addClass('gray2');
      $('.logo3 .client-logo-img').addClass('gray3');
      $('.logo4 .client-logo-img').addClass('gray4');
      $('.logo5 .client-logo-img').addClass('gray5');
    }
    if (goToThisIndex1 == 1) {
      $('.logo0 .client-logo-img').addClass('gray0');
      $('.logo1 .client-logo-img').removeClass('gray1');
      $('.logo2 .client-logo-img').addClass('gray2');
      $('.logo3 .client-logo-img').addClass('gray3');
      $('.logo4 .client-logo-img').addClass('gray4');
      $('.logo5 .client-logo-img').addClass('gray5');
    }
    if (goToThisIndex1 == 2) {
      $('.logo0 .client-logo-img').addClass('gray0');
      $('.logo1 .client-logo-img').addClass('gray1');
      $('.logo2 .client-logo-img').removeClass('gray2');
      $('.logo3 .client-logo-img').addClass('gray3');
      $('.logo4 .client-logo-img').addClass('gray4');
      $('.logo5 .client-logo-img').addClass('gray5');
    }
    if (goToThisIndex1 == 3) {
      $('.logo0 .client-logo-img').addClass('gray0');
      $('.logo1 .client-logo-img').addClass('gray1');
      $('.logo2 .client-logo-img').addClass('gray2');
      $('.logo3 .client-logo-img').removeClass('gray3');
      $('.logo4 .client-logo-img').addClass('gray4');
      $('.logo5 .client-logo-img').addClass('gray5');
    }

    if (goToThisIndex1 == 4) {
      $('.logo0 .client-logo-img').addClass('gray0');
      $('.logo1 .client-logo-img').addClass('gray1');
      $('.logo2 .client-logo-img').addClass('gray2');
      $('.logo3 .client-logo-img').addClass('gray3');
      $('.logo4 .client-logo-img').removeClass('gray4');
      $('.logo5 .client-logo-img').addClass('gray5');
    }

    if (goToThisIndex1 == 5) {
      $('.logo0 .client-logo-img').addClass('gray0');
      $('.logo1 .client-logo-img').addClass('gray1');
      $('.logo2 .client-logo-img').addClass('gray2');
      $('.logo3 .client-logo-img').addClass('gray3');
      $('.logo4 .client-logo-img').addClass('gray4');
      $('.logo5 .client-logo-img').removeClass('gray5');
    }
    startProgressbar1();
  });

  $('.client-logo-section').click(function () {
    $('.client-logo-img').removeClass('active');
    $(this).addClass('active');
  });

  // Counter
  //   $('.count').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 15000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });

  $.getJSON(
    'https://sm-smartconnect-staging.azurewebsites.net/api/DistanceSwap/GetTotalDistance',
    function (data) {
      var kms = data.result.totalDistance;
      var trips = data.result.totalSwaps;
      var co = data.result.totalEmissonFreeDistance;

      $('#count1').attr('data-count', data.result.totalDistance);
      $('#count2').attr('data-count', data.result.totalSwaps);
      $('#count3').attr('data-count', data.result.totalEmissonFreeDistance);

      $(window).scroll(function () {
        var wh = $(window).height() - 500;
        var wh1 = $(window).height() - 1200;
        var wh2 = $(window).height() - 500;
        // var s =  $('.future-mobility').offset().top-wh;
        if ($(window).scrollTop() > $('.future-mobility').offset().top - wh) {
          $('.future-mobility .scotter-section .scotter-img').addClass(
            'animon'
          );
        }
      });

      var a = 0;
      $(window).scroll(function () {
        var oTop = $('#counter-section').offset().top - window.innerHeight;
        // var cTop = oTop + 500;
        // console.log(cTop)
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate(
              {
                countNum: countTo
              },

              {
                duration: 3000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                }
              }
            );
          });
          a = 1;
        }
      });
    }
  );
});
