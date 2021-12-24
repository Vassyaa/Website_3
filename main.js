$(function(){
    $('.menu-toggle').click(function (){
       $('.menu-toggle').toggleClass('menu-hidden');
        $('.header-wrapper').toggleClass('content-hidden');
    });
});



$('.rev_slider').slick({
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
         breakpoint:991,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite:false,
            arrows:false,
            dots:true
            }
        }, 
        {
          breakpoint:767,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:false,
          arrows:false,
          dots:true
         }
        },
        {
            breakpoint:575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false,
            arrows:false,
            dots:true
           }
          },
          {
            breakpoint:430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false,
            arrows:false,
            dots:true
           }
        }                        
    ]
});

$('.nav_slider').slick({
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
         breakpoint:991,
          settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite:false,
           arrows:false,
           dots:true
         }
       },
       {
        breakpoint:767,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite:false,
        arrows:false,
        dots:true
       }
      },
      {
        breakpoint:575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false,
        arrows:false,
        dots:true
       }
      },
      {
        breakpoint:430,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false,
        arrows:false,
        dots:true
       }
    }                          
    ]
});

$('.stories-gallery_slider').slick({
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
           breakpoint:991,
           settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite:false,
           arrows:false,
           dots:true
          }
        },
        {
            breakpoint:767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite:false,
            arrows:false,
            dots:true
           }
          },
        {
          breakpoint:575,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:false,
          arrows:false,
          dots:true
         }
        },
      {
            breakpoint:430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false,
            arrows:false,
            dots:true
           }  
        }            
    ]
});


