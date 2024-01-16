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

    const students = new Swiper('.slider-students', {
        slidesPerView: 1,
        spaceBetween: 70,
        loop: true,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 50000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.slider-students-button-next',
            prevEl: '.slider-students-button-prev',
        },
        pagination: {
            el: '.slider-students-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
        breakpoints: {

            767.98: {
                slidesPerView: 2,
            },
            991.98: {
                slidesPerView: 3,
            },
        }

    }
    )

    const studentsCards = new Swiper('.cards-students__slider', {
        slidesPerView: 1,
        spaceBetween: 70,
        loop: true,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
            delay: 50000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.cards-students-button-next',
            prevEl: '.cards-students-button-prev',
        },
        pagination: {
            el: '.cards-students-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
        breakpoints: {

            767.98: {
                slidesPerView: 2,
            },
            // 991.98: {
            //     slidesPerView: 3,
            // },
        }

    }
    )

    const studentsWorks = new Swiper('.works-students__slider', {
        slidesPerView: 2,
        spaceBetween: 40,
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
            },
            991.98: {
                slidesPerView: 5,
            },
        }

    }

    );

    const prices = new Swiper('.prices__cards', {
        slidesPerView: 1.2,
        spaceBetween: 40,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.prices__cards-button-next',
            prevEl: '.prices__cards-button-prev',
        },
        pagination: {
            el: '.prices__cards-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
        breakpoints: {

            767.98: {
                slidesPerView: 2.2,
            },
            991.98: {
                slidesPerView: 4,
            },
        }

    }

    );


}