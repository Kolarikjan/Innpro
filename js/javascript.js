$(document).ready(function () {

    Fancybox.bind("[data-fancybox]", {});

    document.querySelector('.navbar-toggle').addEventListener('click', function () {

        document.querySelector('.navbar-toggle').classList.toggle('open');

    });


    $('.homepageSlider-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>'],
        margin:1,
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
    });

    $('.gallery-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 9" width="10" height="9"><path id="-e-arrow-slider" class="s0" d="m10 4.6l-4.1-3.8q-0.2-0.2-0.6-0.2-0.4 0-0.6 0.2-0.3 0.3-0.3 0.6 0 0.4 0.3 0.6l1.8 1.8h-5.6c-0.5 0-0.9 0.3-0.9 0.8 0 0.4 0.4 0.8 0.9 0.8h5.6l-1.8 1.8q-0.3 0.2-0.3 0.6 0 0.3 0.3 0.5 0.2 0.3 0.6 0.3 0.4 0 0.6-0.3l4.1-3.7z"/></svg>','<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 9" width="10" height="9"><path id="-e-arrow-slider" class="s0" d="m10 4.6l-4.1-3.8q-0.2-0.2-0.6-0.2-0.4 0-0.6 0.2-0.3 0.3-0.3 0.6 0 0.4 0.3 0.6l1.8 1.8h-5.6c-0.5 0-0.9 0.3-0.9 0.8 0 0.4 0.4 0.8 0.9 0.8h5.6l-1.8 1.8q-0.3 0.2-0.3 0.6 0 0.3 0.3 0.5 0.2 0.3 0.6 0.3 0.4 0 0.6-0.3l4.1-3.7z"/></svg>'],
        margin:0,
        nav: true,
        dots: false,
        responsive: {
            0: {

            },
            1475: {
                items: 4
            }
        }
    });

});