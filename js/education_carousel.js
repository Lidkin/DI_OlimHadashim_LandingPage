$('.owl-carousel-2').owlCarousel({
    center: true,
    autoplay: true,
    autoplaySpeed: 6000,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});