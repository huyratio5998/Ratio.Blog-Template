(function ($) {
  "use strict";

  $(".portfolio-single-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".clients-logo").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".testimonial-wrap").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".portfolio-gallery").each(function () {
    $(this)
      .find(".popup-gallery")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791),
      // styles: style_array_here
    };
    map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
  }

  var google_map_canvas = $("#map-canvas");

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, "load", initialize);
  }

  // Counter

  $(".counter-stat").counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);

const audio = document.getElementById("myAudio");
const btn = document.getElementById("toggleAudioBtn");
let isPlaying = false;

btn.onclick = function () {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
};

audio.onpause = function () {
  btn.innerHTML = '<i class="fa fa-volume-mute"></i> Music';
  btn.classList.remove("playing");
  isPlaying = false;
};
audio.onplay = function () {
  btn.innerHTML = '<i class="fa fa-volume-up"></i> Music';
  btn.classList.add("playing");
  isPlaying = true;
};

// scroll up button
const scrollBtn = document.getElementById("scrollUpBtn");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// scroll down intro section
document.getElementById("getStartedBtn").onclick = function (e) {
  e.preventDefault();
  const nextSection = document.getElementById("intro-section");
  if (nextSection) {
    const targetY =
      nextSection.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const duration = 1200; // ms, slower than default
    let startTime = null;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 0.5 * (1 - Math.cos(Math.PI * progress)); // easeInOut
      window.scrollTo(0, startY + (targetY - startY) * ease);
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    }
    window.requestAnimationFrame(scrollStep);
  }
};
