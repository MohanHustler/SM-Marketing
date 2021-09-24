$(document).ready(function () {

  // popup validation
  // franchies api
  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

  $("#commentForm").validate({
    rules: {
        name: {
            required: true,
        },
        company: {
            required: true,
        },
        Email: {
            required: true,
            email: true
        },
        mobile: {
            required: true,
            number: true
        },
        address: {
            required: true,
        },
        city: {
            required: true
        },
        pin: {
            required: true,
            number: true
        },
        exp: {
            required: true
        },
        prop: {
            required: true
        },
        power: {
            required: true
        },
        invest: {
            required: true
        }
    },submitHandler: function (form) {
        var post_data = $(form).serializeObject();
        console.log(post_data);
        $.ajax({
          type: "POST",
          url:"http://52.172.38.117:5000/franchise/storefranchise",
        }).done(function (data, status) {
          $('#commentForm').addClass('hide');
          $('.form-success').removeClass('hide');
        }).fail(function (data, status) {
          alert('Failed to Submit the Form, Please Try Again.'); 
        });
      }
  });


  $("#subscribeForm").validate({
    rules: {
        email: {
            required: true,
            email: true
        }
    },submitHandler: function (form) {
        var post_data = $(form).serializeObject();
        console.log(post_data);
        $.ajax({
          type: "POST",
          url:"https://func-sm-cs-subscriber.azurewebsites.net/api/AddSubscriber",
          "headers": {
						"Content-Type": "application/json",
						"Cache-Control": "no-cache",
          },
        }).done(function (data, status) {
          $('.subscribe-success').removeClass('hide');
          setTimeout(function(){ 
            $('.subscribe-success').addClass('hide');
          }, 5000);
        }).fail(function (data, status) {
          alert('Failed to Submit, Please Try Again.'); 
        });
      }
  });



  if ($(window).width() < 767) {
    $('.s-list-sections').slick({
     infinite: false,
     arrows: true,
     dots: false,
     autoplay: false,
     speed: 800,
     slidesToShow: 2.5,
     slidesToScroll: 2.5,
   });
 }
 
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('common-header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.common-header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.common-header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }

 });

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('common-header').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('common-header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('common-header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}
