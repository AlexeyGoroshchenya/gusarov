import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';


export const swiper = () => {



    const teachers = new Swiper('.teachers__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 50000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.teachers-button-next',
            prevEl: '.teachers-button-prev',
        },
        pagination: {
            el: '.teachers-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },


    }
    );

    const passing = new Swiper('.passing__slider', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 50000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.passing-button-next',
            prevEl: '.passing-button-prev',
        },
        pagination: {
            el: '.passing-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
        breakpoints: {

            767.98: {
                slidesPerView: 2,
            },
        }

    }
    );



    

    const studentsWorks = new Swiper('.works-students__slider', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 50000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.works-students-button-next',
            prevEl: '.works-students-button-prev',
        },
        pagination: {
            el: '.works-students-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
        breakpoints: {

            767.98: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            991.98: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        }

    }

    );



    const certificates = new Swiper('.slider-certificates__body', {
        slidesPerView: 1.2,
        spaceBetween: 40,
        
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-certificates-button-next',
            prevEl: '.slider-certificates-button-prev',
        },
        pagination: {
            el: '.slider-certificates-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
        breakpoints: {

            480: {
                slidesPerView: 2.2,
            },
            991.98: {
                slidesPerView: 3,
            },
        }

    });

    const experts = new Swiper('.slider-experts', {
        slidesPerView: 1,
        spaceBetween: 80,
        
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-experts-button-next',
            prevEl: '.slider-experts-button-prev',
        },
        pagination: {
            el: '.slider-experts-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },


    });

    const confidence = new Swiper('.slider-confidence', {
        slidesPerView: 1,
        spaceBetween: 30,
        
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-confidence-button-next',
            prevEl: '.slider-confidence-button-prev',
        },
        pagination: {
            el: '.slider-confidence-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
          breakpoints: {


            991.98: {
                slidesPerView: 2,
            },
        }

    });


    const sliderCases = new Swiper('.slider-cases__body', {
        slidesPerView: 1.2,
        spaceBetween: 70,
        loop:true,

       
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-cases-button-next',
            prevEl: '.slider-cases-button-prev',
        },
        pagination: {
            el: '.slider-cases-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
          breakpoints: {

            767.98: {
                slidesPerView: 2.5,
            },
            991.98: {
                slidesPerView: 4,
            },
        }

    })

}