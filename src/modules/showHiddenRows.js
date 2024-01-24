export const showHiddenRows = () => {

    document.addEventListener('click', (e) => {
        if (e.target.closest('.card-how__link')) {
            e.preventDefault()
            e.target.closest('.card-how').classList.toggle('active')
            if (e.target.closest('.card-how').classList.contains('active')) {
                e.target.textContent = "Свернуть"
            } else {
                e.target.textContent = "Смотреть всё"
            }
        }

        if (e.target.closest('.cards-students__link')) {
            e.preventDefault()

            e.target.closest('.cards-students__slide').classList.toggle('active')
            if (e.target.closest('.cards-students__slide').classList.contains('active')) {
                e.target.textContent = "Свернуть"
            } else {
                e.target.textContent = "Смотреть всё"
            }
        }

        if (e.target.closest('.services__button')) {

            const servicesCards = document.querySelector('.services__cards')
            servicesCards.classList.toggle('active')
            if (servicesCards.classList.contains('active')) {
                e.target.textContent = "Свернуть"
            } else {
                e.target.textContent = "Показать больше"
            }
        }



    })



}