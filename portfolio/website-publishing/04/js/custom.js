$(function(){
  $(".toggle").click(function () {
    $(".toggle, .overlay, .gnb").toggleClass("active");
  });
  $(".gnb a").click(function () {
    $(".toggle, .overlay, .gnb").removeClass("active");
  });

  /* Trigger Active */
  $('.trigger').click(function(){
    $('.trigger, .overlay, .gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.trigger, .overlay, .gnb').removeClass('active')
  })

  /* Mode Change & Like Button */
  $(".btn-like").click(function () {
    $(this).toggleClass("active");
  });

  $(".btn-mode").click(function () {
    $(".about .item").toggleClass("dark");
  });

  /* Practical Publishing Section Slider */
  $('.practical-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    /* Clone Coding Front Back Change */
    $(".open-navi").click(function () {
      $(this).addClass("active");
      $(".close-navi").addClass("active");
      $(".front").fadeOut();
      $(".back").fadeIn();
    });
    $(".close-navi").click(function () {
      $(this).removeClass("active");
      $(".open-navi").removeClass("active");
      $(".back").fadeOut();
      $(".front").fadeIn();
    });

  /* Project Slider */
  $('.fullpage-works').slick({
    speed: 500,
    cssEase: 'linear',
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
  });
})
