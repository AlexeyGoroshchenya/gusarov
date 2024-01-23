
import { header } from './modules/header';
import { accordion } from './modules/accordion';
import { prices } from './modules/prices';
import { reviews } from './modules/reviews';
import { faq } from './modules/faq';
import { swiper } from './modules/swiper';
import { studentsSliders } from './modules/studentsSliders';
import { timer } from './modules/timer';
import { phoneInputs } from './modules/phoneInputs';

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
// плагин выбора страны для инпутов ввода телефонного номера. взят отсюда https://github.com/jackocnr/intl-tel-input
phoneInputs()


// пояснения по стилям:
// style.css общие для всех файлов стили
// header.css footer.css - стили футера и хедера
// main.css общие стили для блоков из раздела main, которые модифицируются в конкретных файлах
// index.css smm.css context.css - файлы со стилями, характерными для таких же страниц html
// circle.css - стили круговой диаграммы. используются в блоках тарифных планов и кейсов студентов
// plan.css и review.css стили для блоков тарифных планов и отзывов