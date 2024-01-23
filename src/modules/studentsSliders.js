import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';


export const studentsSliders = () => {

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

    })

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

    })

    const studentsCardsSmm = new Swiper('.cards-students__slider_smm', {
        slidesPerView: 1.1,
        spaceBetween: 40,
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
            991.98: {
                slidesPerView: 3,
            },
        }

    })

 
        let studentReview = ''
        const studentReviewModal = document.querySelector('#students-review')   

    document.addEventListener('click', function (e) {

        if (e.target.closest('.slider-students__image')) {
            e.target.closest('.slider-students__image').classList.toggle('active')
            if(e.target.closest('.slider-students__image').classList.contains('active')){
                e.target.closest('.slider-students__image').querySelector('video').play()
            } else {
                e.target.closest('.slider-students__image').querySelector('video').pause()
            }
            
        }

        if (e.target.closest('.slider-students__link')) {
            

            studentReview = e.target.closest('.slider-students__slide').querySelector('.slider-students__review').innerHTML
            studentReviewModal.querySelector('.modal__body').innerHTML = `
                    <div class="modal__text">
                        ${studentReview}
                        </div>
                    `
            setTimeout(()=>{
                studentReviewModal.classList.add('active')
            },300)

        }

        if (e.target.closest('#students-review') && !e.target.closest('.modal__body')) {
            document.querySelector('#students-review').classList.remove('active')
            studentReviewModal.querySelector('.modal__body').innerHTML=''
            studentReview=''
        }
    })

}