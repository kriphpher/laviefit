$('.owl-carousel').owlCarousel({
    merge: true,
    autoplay: true,
    rewind: false,
    loop: true,
    margin: 5,
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

// alert("I did my best")
// alert("Sorry for take so much to finish this")
// alert("I've learned a lot, and also improved some skills")
// alert("Hope u guys Like it")