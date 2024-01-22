import Swiper, { Navigation, Pagination } from 'swiper';

export const prices = () => {

    const prices = new Swiper('.prices__cards_four', {
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

    });

    const pricesContext = new Swiper('.prices__cards_three', {
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
                slidesPerView: 3,
            },
        }

    });

    const cards = document.querySelector('.prices__cards')


    document.addEventListener('click', (e) => {

        if (e.target.closest('.card-prices__more')) {

             
             if (e.target.closest('.card-prices').classList.contains('active')) {
                e.target.closest('.card-prices').classList.remove('active')
                e.target.closest('.card-prices').querySelector('.card-prices__more').textContent = 'Показать еще'
            } else {
                e.target.closest('.card-prices').classList.add('active')
                e.target.closest('.card-prices').querySelector('.card-prices__more').textContent = 'Свернуть'
            }

        }

    })

}