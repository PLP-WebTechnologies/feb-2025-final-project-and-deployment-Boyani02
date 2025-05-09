let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);




// Initialize Swiper for team section
document.addEventListener('DOMContentLoaded', function() {
  const teamSwiper = new Swiper('.team-swiper', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
      },
      
      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      
      // Pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      
      // Responsive breakpoints
      breakpoints: {
          // When window width is >= 640px
          640: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          // When window width is >= 992px
          992: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      }
  });
});