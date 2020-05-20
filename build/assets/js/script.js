


/*------- Smooth Scroll -------*/

// $('a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }

// });



/**
 * Swiper 3.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: October 16, 2016
 */



$(document).ready(function(){
    $('.customer-logos').slick({
        loop:false,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5
            }
        }]
    });
  });
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
 var loader;
 function loadNow(opacity){
     if(opacity <= 0){
         displayContent();
     }
     else{
         loader.style.opacity = opacity;
         window.setTimeout(function(){
             loadNow(opacity - 0.05)
         }, 100);
     }
 }
 function displayContent(){
     loader.style.display = 'none';
     document.getElementById('content').style.display = 'block';
 }
 document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById("loader");
    loadNow(1.5);
 })
 function check(form) {

    if (form.email.value == "mohsinziaee123@gmail.com") {
        window.open("https://gsuite.google.com/intl/en_sg/");
    }
    else {
        alert("The username you entered doesn't belong to an account. Please check your username & password and try again.")
    }
}