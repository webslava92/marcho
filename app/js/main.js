$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000
  });
  
  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#cccccc",
    ratedFill: "#ffc35b",
    readOnly: true
  });

});