$('.owl-carousel').owlCarousel({
    merge: true,
    autoplay: true,
    rewind: false,
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    navText: ["<",">"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// alert("I did my best, sorry for take it so long")
// alert("Hope u guys Like it")