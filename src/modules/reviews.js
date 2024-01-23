import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

export const reviews = () => {

    const reviews = new Swiper('.slider-reviews', {
        slidesPerView: 1,
        spaceBetween: 80,
        
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-reviews-button-next',
            prevEl: '.slider-reviews-button-prev',
        },
        pagination: {
            el: '.slider-reviews-pagination',
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

    });

    const reviews_video = new Swiper('.slider-reviews_video', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-reviews_video-button-next',
            prevEl: '.slider-reviews_video-button-prev',
        },
        pagination: {
            el: '.slider-reviews_video-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
          breakpoints: {

            767.98: {
                slidesPerView: 2,
            },

        }

    })

    const reviews_facebook = new Swiper('.slider-reviews_facebook', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-reviews_facebook-button-next',
            prevEl: '.slider-reviews_facebook-button-prev',
        },
        pagination: {
            el: '.slider-reviews_facebook-pagination',
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

    })

    const reviews_audio = new Swiper('.slider-reviews_audio', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop:true,
        
        modules: [Navigation, Pagination],
       
        navigation: {
            nextEl: '.slider-reviews_audio-button-next',
            prevEl: '.slider-reviews_audio-button-prev',
        },
        pagination: {
            el: '.slider-reviews_audio-pagination',
            clickable: true,
            bulletActiveClass: 'pagination-bullet-active',
            bulletClass: 'pagination-bullet',
          },
          breakpoints: {

            767.98: {
                slidesPerView: 2,
            },

        }

    })


    document.addEventListener('click', (e) => {

        if (e.target.closest('.reviews__button') && !e.target.closest('.reviews__button').classList.contains('active')) {
           
            document.querySelectorAll('.reviews__button').forEach(item=>{
                item.classList.remove('active')
            })
            e.target.closest('.reviews__button').classList.add('active')

            if (e.target.closest('.reviews__button_video')) {
                document.querySelectorAll('.reviews__slider').forEach(item=>{
                    item.classList.remove('active')
                })
                
                document.querySelector('.reviews__slider_video').classList.add('active')
            }

            if(e.target.closest('.reviews__button_text')){
                document.querySelectorAll('.reviews__slider').forEach(item=>{
                    item.classList.remove('active')
                })
                
                document.querySelector('.reviews__slider_text').classList.add('active')
            }

            if(e.target.closest('.reviews__button_facebook')){
                document.querySelectorAll('.reviews__slider').forEach(item=>{
                    item.classList.remove('active')
                })
                
                document.querySelector('.reviews__slider_facebook').classList.add('active')
            }

            if(e.target.closest('.reviews__button_audio')){
                document.querySelectorAll('.reviews__slider').forEach(item=>{
                    item.classList.remove('active')
                })
                
                document.querySelector('.reviews__slider_audio').classList.add('active')
            }
        }

        if(e.target.closest('.slider-reviews__button')){
            e.target.closest('.slider-reviews__slide').classList.toggle('active')
        }

        if(e.target.closest('.slider-reviews_video__slide')){
            e.target.closest('.slider-reviews_video__slide').classList.toggle('active')
            if(e.target.closest('.slider-reviews_video__slide').classList.contains('active')){
                e.target.closest('.slider-reviews_video__slide').querySelector('video').play()
            } else {
                e.target.closest('.slider-reviews_video__slide').querySelector('video').pause()
            }
        }



    })

}