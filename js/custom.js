$(function () {

    const mvs = new Swiper('.main_visual_slide', {

        loop: true,
        speed: 1500,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,

        },
   

    })


});


$(function () {
    
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }


})

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });
    

}) 