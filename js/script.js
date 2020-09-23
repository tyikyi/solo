/*for preloader*/

$(window).on("load",function(){
  $('#status').fadeOut(500);
  $('#preloader').delay(500).fadeOut();
});

/*for owlcarousel */

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:3,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      nav:true,
      dots:false,
      navText:['<button type="submit" class="btn btn-success" ><</button>','<button type="submit" class="btn btn-success" >></button>'],
  });
});

/* for progress bar*/

$(document).ready(function(){
  $("#team-progress").waypoint(function(){
    $(".progress-bar").each(function(){
      $(this).animate({
        width:$(this).attr("aria-valuenow")+ "%"
      },1000);
    });
    this.destroy();
  },{
    offset:"bottom-in-view"
  });
});

/* for responsive tabs*/
$(document).ready(function(){
  $("#service-tabs").responsiveTabs({
    animation:"slide"
  });
});

/* hide white nav */
$(document).ready(function(){
  $(window).scroll(function(){
   if($(window).scrollTop()>50){
    $("nav").addClass("white-nav");
    $(".nav-header img").attr("src","img/logo/logo-dark.png");
   }
   else{
    $("nav").removeClass("white-nav");
     $(".nav-header img").attr("src","img/logo/logo.png");
   }
  });
});

$(document).ready(function(){
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();
    var section_id = $(this).attr("href");
    $("html,body").animate({
      scrollTop:$(section_id).offset().top
    },1250);
  });
});
