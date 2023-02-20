$('.bar').click(function(){
    $('.aside').toggleClass('active')
});
$('.link1').click(function(){
    // Links
    $(this).addClass('active')
    $(".link2").removeClass('active')
    $(".link3").removeClass('active')
    $(".link4").removeClass('active')
    $(".link5").removeClass('active')
    $(".button.btn-nav").removeClass('active')

    // Pages
    $(".home.section").addClass('active')
    $(".work.section").removeClass('active')
    $(".about.section").removeClass('active')
    $(".contact.section").removeClass('active')
    $(".hire.section").removeClass('active')

    //body
    $(".body").removeClass("active")
});
$('.link2').click(function(){
    // Links
    $(this).addClass('active')
    $(".link1").removeClass('active')
    $(".link3").removeClass('active')
    $(".link4").removeClass('active')
    $(".link5").removeClass('active')
    $(".button.btn-nav").addClass('active')


    //Pages
    $(".work.section").addClass('active')
    $(".home.section").removeClass('active')
    $(".about.section").removeClass('active')
    $(".contact.section").removeClass('active')
    $(".hire.section").removeClass('active')

    //body
    $(".body").removeClass("active")
});
$('.link3').click(function(){
    $(this).addClass('active')
    $(".link1").removeClass('active')
    $(".link2").removeClass('active')
    $(".link4").removeClass('active')
    $(".link5").removeClass('active')
    $(".button.btn-nav").addClass('active')

    // Pages
    $(".about.section").addClass('active')
    $(".work.section").removeClass('active')
    $(".home.section").removeClass('active')
    $(".contact.section").removeClass('active')
    $(".hire.section").removeClass('active')

    //body
    $(".body").removeClass("active")
});
$('.link4').click(function(){
    // Links
    $(this).addClass('active')
    $(".link1").removeClass('active')
    $(".link2").removeClass('active')
    $(".link3").removeClass('active')
    $(".link5").removeClass('active')
    $(".button.btn-nav").addClass('active')

    // Pages
    $(".contact.section").addClass('active')
    $(".work.section").removeClass('active')
    $(".about.section").removeClass('active')
    $(".home.section").removeClass('active')
    $(".hire.section").removeClass('active')

    //body
    $(".body").addClass("active")
});
$('.link5').click(function(){
    // Links
    $(this).addClass('active')
    $(".link1").removeClass('active')
    $(".link2").removeClass('active')
    $(".link3").removeClass('active')
    $(".link4").removeClass('active')
    $(".button.btn-nav").removeClass('active')

    // Pages
    $(".hire.section").addClass('active')
    $(".work.section").removeClass('active')
    $(".about.section").removeClass('active')
    $(".contact.section").removeClass('active')
    $(".home.section").removeClass('active')

    //body
    $(".body").removeClass("active")
});
$('.button').click(function(){
    // Links
    $(".link5").addClass('active')
    $(".link1").removeClass('active')
    $(".link2").removeClass('active')
    $(".link3").removeClass('active')
    $(".link4").removeClass('active')
    $(".button.btn-nav").removeClass('active')


    //Pages
    $(".work.section").removeClass('active')
    $(".home.section").removeClass('active')
    $(".about.section").removeClass('active')
    $(".contact.section").removeClass('active')
    $(".hire.section").addClass('active')

    //body
    $(".body").removeClass("active")
});

$(document).ready(function(){
    $(".owl-work").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplayTimeout:5000,
    autoplay : true ,
    center: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    responsive:{
        0:{
            items:1,
        },
        1199:{
            items:3,
        },
        }
    },
    );
});