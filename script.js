const list = document.querySelector('.navbar');
const btns = document.querySelector('.navbtns');
const abc = function () {
    list.classList.toggle('active');
}
btns.addEventListener('click',abc);

$(document).ready(function(){
    $('.rating_section').slick({
               dots: true,
               infinite: false,
               speed: 300,
               slidesToShow: 3,
               slidesToScroll: 1,
               responsive: [
                   {
                   breakpoint: 1320,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1,
                       infinite: true,
                       dots: true
                   }
                   },
                   {
                   breakpoint:992,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                   }
                   },
                   {
                   breakpoint: 780,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1
                   },
                   
                   },
                   {
                    breakpoint:752,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                    },
                    {
                        breakpoint:464,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        }
                   // You can unslick at a given breakpoint now by adding:
                   // settings: "unslick"
                   // instead of a settings object
               ]
               });

   });