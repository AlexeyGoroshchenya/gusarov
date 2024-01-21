export const faq = () => {


    document.addEventListener('click', (e) => {

        if (e.target.closest('.faq__card ') && !e.target.closest('.faq__card').classList.contains('active')) {
           
            document.querySelectorAll('.faq__card').forEach(item=>{
                item.classList.remove('active')
            })
            e.target.closest('.faq__card').classList.add('active')

        }



    })

}