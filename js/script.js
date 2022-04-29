"use strict";
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseonfocus: true,
    pauseonhover: true,
    infintite: true,
    centerMode: true,
    variablewidth: true,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map-test", {
    center: [59.910167, 30.318788],
    zoom: 12,
  });

  let placemark = new ymaps.Placemark([59.910167, 30.318788], {});
  let placemarkTwo = new ymaps.Placemark([59.959273, 30.301001], {});
  myMap.controls.remove("geolocationControl"); // удаляем геолокацию
  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
  myMap.controls.remove("rulerControl"); // удаляем контрол правил
  myMap.geoObjects.add(placemark);
  myMap.geoObjects.add(placemarkTwo);
}

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
