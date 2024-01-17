export const accordion = () => {


    document.addEventListener('click', (e) => {

        if (e.target.closest('.accordion-title')) {
            if (e.target.closest('.accordion-item').classList.contains('active')) {
                e.target.closest('.accordion-item').classList.remove('active')
            } else {
                if (document.querySelector('.accordion-item.active')) {
                    document.querySelector('.accordion-item.active').classList.remove('active')
                }
                e.target.closest('.accordion-item').classList.add('active')
            }

        }

        if (e.target.closest('.accordion-card__button') && !e.target.closest('.accordion-card__button').classList.contains('active')) {
            e.target.closest('.accordion-card').querySelectorAll('.accordion-card__button').forEach(item => {
                item.classList.toggle('active')
            });
            e.target.closest('.accordion-card').querySelectorAll('.accordion-card__list').forEach(item => {
                item.classList.toggle('active')
            })
        }

    })

}