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

// $('.comments').owlCarousel({
//     animateOut: 'fadeOut',
//     margin:30,
//     stagePadding:30,
//     smartSpeed:450
//     loop: true,
//     nav: false,
//     dots: false,
// });

// alert("I did my best")
// alert("I've learned a lot, and also improved some skills")
// alert("Hope u guys Like it")