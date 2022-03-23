//슬라이드
$('.slide_inner').slick({
    infinite: true,
    speed: 1000,
    dots: true,
    slidesToShow: 1,
    swipe: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /*재생 정지 버튼*/
  $('.home .slide_controller').click(function(){
    const $state = $(this).hasClass('stop');
    //console.log("stop 클래스 있나요" + $state);   //false-재생상태

    //재생상태면 이미지를 변경하면서 슬라이드 멈추기
    if($state == false) {
      $(this).addClass('stop');
      $(this).find('img').attr({'src':'./images/play.png', 'alt':'start'});
      $('.slide_inner').slick('slickPause');
    }else {
      $(this).removeClass('stop');
      $('.slide_inner').slick('slickPlay');

      $(this).find('img').attr({'src':'./images/pause.png', 'alt':'stop'});
    }    
  });


  $('.best_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1500,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.sns_slider').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });