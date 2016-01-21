/*
==========================================================================================
                                SCROLL NAVBAR
==========================================================================================
*/
var didScroll;
var lastScrollTop = 0;
var delta = 100;
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
    else if (scrollY < 300) {
        $('header').removeClass('nav-up').addClass('nav-down');
    }
    lastScrollTop = st;
}

/*
==========================================================================================
                                    SLIDER
==========================================================================================
*/

$('.carousel').carousel({
    interval: 5000 //changes the speed
})
/*
==========================================================================================
                                    ICON HOVER
==========================================================================================
*/
function hover(element) {
    element.setAttribute('src', 'assets/profil-hover.png');
}
function unhover(element) {
    element.setAttribute('src', 'assets/profil.png');
}

function hoverberita(element) {
    element.setAttribute('src', 'assets/berita-hover.png');
}
function unhoverberita(element) {
    element.setAttribute('src', 'assets/berita.png');
}
function hovergaleri(element) {
    element.setAttribute('src', 'assets/galeri-hover.png');
}
function unhovergaleri(element) {
    element.setAttribute('src', 'assets/galeri.png');
}
function hoverlayanan(element) {
    element.setAttribute('src', 'assets/pelayanan-hover.png');
}
function unhoverlayanan(element) {
    element.setAttribute('src', 'assets/pelayanan.png');
}
function hoverkontak(element) {
    element.setAttribute('src', 'assets/kontak-hover.png');
}
function unhoverkontak(element) {
    element.setAttribute('src', 'assets/kontak.png');
}