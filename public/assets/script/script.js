const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$('.main__menu').mouseover(function(){
    $('#header').addClass('active');
    $('.sub__menu').show();
    $('.main__menu').css('padding-bottom', '460px').css('transform', 'translateY(230px)');
});
$('.main__menu').mouseout(function(){
    $('#header').removeClass('active');
    $('.sub__menu').hide();
    $('.main__menu').css('padding-bottom', '0px').css('transform', 'translateY(0px)');
});