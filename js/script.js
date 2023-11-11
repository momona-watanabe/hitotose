

//openbtn
$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});






//slick
$('.slider').slick({
  fade:true,
  autoplay:true,
  autoplaySpeed:3000,
  speed:1000,
  infinite:true,
  slideToShow:1,
  slideToScroll:1,
  arrows:false,
  pauseOnFocus:false,
  pauseOnHover:false,
  pauseOnDotsHover:false,
});






//blur
function fadeAnime1(){
  $('.blurTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windouHeight = $(window).height();
    if (scroll >= elemPos - windouHeight){
      $(this).addClass('blur');
    }else{
      $(this).removeClass('blur');
    }
  });
}

$(window).scroll(function (){
  fadeAnime1();
});
