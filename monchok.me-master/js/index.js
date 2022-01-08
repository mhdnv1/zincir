window.addEventListener('DOMContentLoaded', () => {
  // slider top
  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: '.mySwiper .swiper-button-next',
      prevEl: '.mySwiper .swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
  // slider reviews
  const swiperReviews = new Swiper('.reviews .swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // slider sales
  const sliderSales = new Swiper('.sales .swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      590: {
        direction: 'vertical',
      },
      320: {
        direction: 'horizontal',
      }
    }

  });
  // slider product
  const sliderProducts = new Swiper('.for_you .swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.for_you .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1400: {
        slidesPerView: 5
      },
      990: {
        slidesPerView: 4,
      },
      770: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    }
  });

  document.querySelector(".search_top").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".search_block").style.display = "flex";
    document.querySelector("header").style.display = "none";
  });

  document.querySelector(".cancel_search_btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".search_block").style.display = "none";
    document.querySelector("header").style.display = "flex";
  });


  $(document).ready(() => {
    $(".page_wrapper_header").hover(function () {
      if ($(window).width() > 768) {
        $(this).toggleClass("active");
      }
    });

    $(".dropdown").hover(() => {
      if ($(window).width() > 768) {
        $(".dropdown-content").toggle();
      }
    });
    $(".dropdown").click(() => {
      if ($(window).width() < 768) {
        $(".dropdown-content").toggle();
      }
    });

    var stickyOffset = $(".menu_header").offset().top;
    $(window).scroll(() => {
      var sticky = $(".menu_header"),
        scroll = $(window).scrollTop();

      if ($(window).width() > 768) {
        if (scroll >= stickyOffset) {
          sticky.addClass("fixed");
          $(".menu_header ul li").css(
            { margin: "0px 30px" },
            { "text-align": "left" }
          );
        } else {
          sticky.removeClass("fixed");
          $(".menu_header ul li").css({ margin: "0px 20px" });
        }
      }
    });

    $(".menu_mobile").click(() => {
      $(".menu_header").toggle(() => {
        $(".menu_header").css(
          { borderBottomLeftRadius: "5px" },
          { display: "flex" }
        );
      });
      $('.help_me').css({ display: "flex" })
      $(".menu_header_top").css({ display: "flex" });
    });

    $(".menu_header_top i").click(() => {
      if ($(window).width() < 768) {
        $(".menu_header").css({ display: "none" });
        $(".menu_header").css({ borderBottomLeftRadius: "0px" });
        $(".menu_header_top").css({ display: "none" });
      }
    });

    $('.filter_show div').click(function () {
      $('.filter form').toggle()
      $('.filter_show i').toggleClass('fa-chevron-up')
      $('.filter_show i').toggleClass('fa-chevron-down')
    })
  });



})
