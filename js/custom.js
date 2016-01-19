 var didScroll;
 var lastScrollTop = 0;
 var delta = 1;
 var navbarHeight = $('header').outerHeight();

 $(window).scroll(function (event) {
     didScroll = true;
 });

 setInterval(function () {
     if (didScroll) {
         hasScrolled();
         didScroll = false;
     }
 }, 250);

 function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if (Math.abs(lastScrollTop - st) <= delta)
         return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st > lastScrollTop && st > navbarHeight) {
         // Scroll Down
         $('header').removeClass('nav-down').addClass('nav-up');
     } 
//     else if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
     else if(scrollY<500){
         $('header').removeClass('nav-up').addClass('nav-down');
     }
     lastScrollTop = st;
 }

$('.carousel').carousel({
        interval: 5000 //changes the speed
    })