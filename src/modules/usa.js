
import Swiper, { Navigation, Pagination } from 'swiper';

export const usa = () => {

const team = new Swiper('.team__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    modules: [Navigation, Pagination],

    navigation: {
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
    },
    pagination: {
        el: '.team-pagination',
        clickable: true,
        bulletActiveClass: 'pagination-bullet-active',
        bulletClass: 'pagination-bullet',
      },
    breakpoints: {

        400.98: {
            slidesPerView: 2,
        },

        767.98: {
            slidesPerView: 3,
        },

        991.98: {
            slidesPerView: 4,
        },
    }
}
);

const usaCases = new Swiper('.cases-countries-cards.usa', {
    slidesPerView: 1.1,
    spaceBetween: 50,
    loop: true,
    modules: [Navigation, Pagination],

    navigation: {
        nextEl: '.cases-countries-button-next',
        prevEl: '.cases-countries-button-prev',
    },
    pagination: {
        el: '.cases-countries-pagination',
        clickable: true,
        bulletActiveClass: 'pagination-bullet-active',
        bulletClass: 'pagination-bullet',
      },
    breakpoints: {

        767.98: {
            slidesPerView: 1.6,
        },
        991.98: {
            slidesPerView: 2,
        },
    }
}
);

const massMedia = new Swiper('.massmedia__slider', {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    modules: [Navigation, Pagination],

    navigation: {
        nextEl: '.massmedia-button-next',
        prevEl: '.massmedia-button-prev',
    },
    pagination: {
        el: '.massmedia-pagination',
        clickable: true,
        bulletActiveClass: 'pagination-bullet-active',
        bulletClass: 'pagination-bullet',
      },
    breakpoints: {

        767.98: {
            slidesPerView: 5,
        },
    }
}
);

document.addEventListener('click', (e) => {

    if (e.target.closest('.peculiarities__button')) {

         
         if (e.target.closest('.peculiarities__textbox').classList.contains('active')) {
            e.target.closest('.peculiarities__textbox').classList.remove('active')
            e.target.closest('.peculiarities__textbox').querySelector('.peculiarities__button').textContent = 'Показать больше'
        } else {
            e.target.closest('.peculiarities__textbox').classList.add('active')
            e.target.closest('.peculiarities__textbox').querySelector('.peculiarities__button').textContent = 'Свернуть'
        }

    }

})


}