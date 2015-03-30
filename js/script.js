$(function(){

  //Hero fade effect 
  if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    $(document).scroll(function(){
      var scrollTop = $(document).scrollTop();
      console.log(scrollTop);  

      if (scrollTop >= 0 ) {
        $('.headline').css('-webkit-transform', 'translate3d(0, '+ scrollTop / 2.5 +'px, 0)');
        $('.headline').css('-moz-transform', 'translate3d(0, '+ scrollTop / 2.5 +'px, 0)');
      }

      if (scrollTop > 0 ) {
        $('.headline').css('opacity', 100 / scrollTop );
      } else {
        $('.headline').css('opacity', '1' );
      }
    });
  }

  //Navigation 
  $('.icon-nav').hover(function() {
    $('.main-header').addClass('header-fade');
    $('.menu').show();
    $('.icon-nav').hide();
    $('.logo').show();
  });

  $('.main-header').on('mouseleave', function(){
    $(this).removeClass('header-fade');
    $('.menu').hide();
    $('.icon-nav').show();
    $('.logo').hide();
  });

  //Project view Show
  $('.widget-container img').click(function(){
    var content = $(this).data('content');
    console.log(content);
  
   $('html').css('overflow','hidden');
   $('.project-view').addClass('slide');
   $('.project-content').load(content +".html #work", function(){
    //Slides Js
    $(function(){
        $("#slides").slidesjs({
          width: 624,
          height: 500
        });
      });
   });
  });

  //Project view close
  $('.close').click(function(){
    $('html').css('overflow','scroll');
    $('.project-view').removeClass('slide');
  });

  //FlowType
  $('.hero h1').flowtype({
    fontRatio : 9,
    minFont : 0,
    maxFont : 1000,
    minimum : 320,
    maximum : 1024
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    }
});
});
