export const toggleCases = () => {

    document.addEventListener('click', (e) => {
        if (e.target.closest('.cases_selection__button') && !e.target.closest('.cases_selection__button').classList.contains('active')) {
            document.querySelector('.cases_selection__button.active').classList.remove('active')
            e.target.closest('.cases_selection__button').classList.add('active')

            const index = e.target.closest('.cases_selection__button').dataset.ind
            console.log(index);
            document.querySelector('.cases_selection__textbox.active').classList.remove('active')
            document.querySelector('.cases_selection__imagebox.active').classList.remove('active')
            document.querySelector(`[data-ind="${index}"].cases_selection__textbox`).classList.add('active')
            document.querySelector(`[data-ind="${index}"].cases_selection__imagebox`).classList.add('active')
        }
                
    })

}