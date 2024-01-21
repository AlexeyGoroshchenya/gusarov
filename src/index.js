
import { header } from './modules/header';
import { accordion } from './modules/accordion';
import { prices } from './modules/prices';
import { reviews } from './modules/reviews';
import { faq } from './modules/faq';
import { swiper } from './modules/swiper';
import { studentsSliders } from './modules/studentsSliders';
import { timer } from './modules/timer';

//слушатели для менюшек хедера
header()
//слушатели аккордиона для блоков faq и учебный план
accordion()
//слушатели и карусель блока тарифов. есть на всех страницах
prices()
//слушатели и карусели блока отзывов. на всех 3 страницах
reviews()
//слушатель блока faq для всех страниц
faq()
//остальные карусели с разных страниц
swiper()
//слушатели и карусели для блока про студентов. присутствуют на страницах курс маркетинга и смм
studentsSliders()
//таймер для страницы smm
if(document.querySelector('.timer')){
    timer('01 may 2024', '.timer')
}




// 01 october 2022