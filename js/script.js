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
    swip: true,
    touchMove: true,
    touchThreshold: 10,
    speed: 150,
    easing: 'easeInOutCubic',
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          preload: [0,2],
          keyboard: true,          
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
const getStartedBtn = document.getElementById("getStartedBtn");
if (getStartedBtn) {
  getStartedBtn.onclick = function (e) {
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
}

// leaf background
const starsBg = document.querySelector(".stars-bg");
starsBg.innerHTML = ""; // Clear previous stars
const leafColors = ["#8bc34a", "#ffb300", "#ff7043", "#a1887f", "#43a047"];
for (let i = 0; i < 5; i++) {
  const leaf = document.createElement("div");
  leaf.className = "leaf";
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
  leaf.style.animationDelay = Math.random() * 4 + "s";

  // SVG leaf shape
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "leaf-shape");
  svg.setAttribute("viewBox", "0 0 18 18");
  svg.innerHTML = `<path d="M9 2 Q13 6 9 16 Q5 6 9 2 Z" fill="${
    leafColors[Math.floor(Math.random() * leafColors.length)]
  }" />`;

  leaf.appendChild(svg);
  starsBg.appendChild(leaf);
}

// mini nav bar
window.addEventListener('scroll', function () {    
    const stickyBar = document.getElementById('miniStickyBar');
    if (stickyBar) {
      if (window.scrollY > 100) {
        stickyBar.style.display = 'block';
      } else {
        stickyBar.style.display = 'none';
      }
    }
  });
