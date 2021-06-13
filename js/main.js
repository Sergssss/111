$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      touchThreshold: 10,
      waitForAnimate: false,
      variableWidth: true,
   });
});