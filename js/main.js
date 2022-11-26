// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,

    startPosition: 1, 
    items: 1,
})
$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

//order__timer

var timer2 = "30:00";
var interval = setInterval(function() {

  var timer = timer2.split(':');
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  $('.countdown').html(minutes + ':' + seconds);
  if (minutes < 0) clearInterval(interval);
  if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
  timer2 = minutes + ':' + seconds;
}, 1000);


//input--phone
document.querySelector('.ss').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)