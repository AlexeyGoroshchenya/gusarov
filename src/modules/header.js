export const header = () => {
    const header = document.querySelector('.header')

    const contactsHeaderButton = document.querySelector('.contacts-header__button')
    const contactsHeaderList = document.querySelector('.contacts-header__list')
    const aboutHeaderToogle = document.querySelector('.about-header__toogle')
    const aboutHeaderList = document.querySelector('.about-header__list')
    const coursesHeaderToogle = document.querySelector('.courses-header__toogle')
    const coursesHeaderList = document.querySelector('.courses-header__list')
    const headerMenuButton = document.querySelector('.header__menu-button')
    const headerNav = document.querySelector('.header__nav')

    const openMenu = (btn, menu) => {
        menu.classList.remove('hidden')
        btn.classList.add('active')
    }

    const closeMenu = (btn, menu) => {
        menu.classList.add('hidden')
        btn.classList.remove('active')
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.contacts-header__button')) {
            if (contactsHeaderList.classList.contains('hidden')) {
                closeMenu(headerMenuButton, headerNav)
                closeMenu(aboutHeaderToogle, aboutHeaderList)
                closeMenu(coursesHeaderToogle, coursesHeaderList)
                openMenu(contactsHeaderButton, contactsHeaderList)
            } else {
                closeMenu(contactsHeaderButton, contactsHeaderList)
            }
        }

        if (e.target.closest('.about-header__toogle')) {
            if (aboutHeaderList.classList.contains('hidden')) {
                
                closeMenu(contactsHeaderButton, contactsHeaderList)
                closeMenu(coursesHeaderToogle, coursesHeaderList)
                openMenu(aboutHeaderToogle, aboutHeaderList)
            } else {
                closeMenu(aboutHeaderToogle, aboutHeaderList)
            }
            
        }
        if (e.target.closest('.courses-header__toogle')) {

            if (coursesHeaderList.classList.contains('hidden')) {
                
                closeMenu(contactsHeaderButton, contactsHeaderList)
                closeMenu(aboutHeaderToogle, aboutHeaderList)
                openMenu(coursesHeaderToogle, coursesHeaderList)
            } else {
                closeMenu(coursesHeaderToogle, coursesHeaderList)
            }

        }

        if (e.target.closest('.header__menu-button')) {

            if (headerNav.classList.contains('hidden')) {
                closeMenu(contactsHeaderButton, contactsHeaderList)
                openMenu(headerMenuButton, headerNav)
            } else {
                closeMenu(headerMenuButton, headerNav)
                closeMenu(aboutHeaderToogle, aboutHeaderList)
                closeMenu(coursesHeaderToogle, coursesHeaderList)
            }
        }

        if(e.target.closest('.contacts-header__application')){
            document.querySelector('#contact-form').classList.add('active')
            closeMenu(contactsHeaderButton, contactsHeaderList)
        }

        if(e.target.closest('#contact-form') && !e.target.closest('.modal__body')){
            document.querySelector('#contact-form').classList.remove('active')
        }

        if(contactsHeaderButton.classList.contains('active') && !e.target.closest('.header')){
            closeMenu(contactsHeaderButton, contactsHeaderList)
        }
        if(aboutHeaderToogle.classList.contains('active') && !e.target.closest('.header')){
            closeMenu(aboutHeaderToogle, aboutHeaderList)
        }
        if(coursesHeaderToogle.classList.contains('active') && !e.target.closest('.header')){
            closeMenu(coursesHeaderToogle, coursesHeaderList)
        }
        if(headerMenuButton.classList.contains('active') && !e.target.closest('.header')){
            closeMenu(headerMenuButton, headerNav)
                closeMenu(aboutHeaderToogle, aboutHeaderList)
                closeMenu(coursesHeaderToogle, coursesHeaderList)
        }

    })



}