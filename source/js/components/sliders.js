import Swiper from "../vendor/swiper";
import vars from "../_vars";
const { mainLinks } = vars;
import {
  addCustomClass,
  removeCustomClass,
  removeClassInArray,
} from "../functions/customFunctions";

const mainSwiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  freemode: true,
  spaceBetween: 50,
  direction: "vertical",
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },

  on: {
    init: function () {
      mainLinks.map(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          const slideTo = function(id, number){
            if (link.getAttribute("href").replace("#", "") == id ) {
              mainSwiper.slideTo(number, 800, true);
            }
          }

          let containerWidth = document.documentElement.clientWidth;
          let slideNubmer = 22;
          let secondSlideNumber = 23;

          if(containerWidth <= 1024){
            slideNubmer = 20;
            secondSlideNumber = 21;
          }

          slideTo('about', slideNubmer);
          slideTo('contact', secondSlideNumber);

        });
      });
    },
  },
});

