export const prices = () => {

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