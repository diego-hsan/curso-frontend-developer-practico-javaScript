const menuEmail = document.querySelector('.navbar-email')
const menuIcon= document.querySelector('.menuIcon')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuDesktop = document.querySelector('.desktop-menu')
const menuMobile = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click',toggledesktopMenu)
menuIcon.addEventListener('click',toggleMenuMobile)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)


function toggledesktopMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if(!isAsideMenuClosed){
        aside.classList.add('inactive')
    }

    menuDesktop.classList.toggle('inactive')

}


function toggleMenuMobile(){
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if(!isAsideMenuClosed){
        aside.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')
    const isMenuDesktopClosed = menuDesktop.classList.contains('inative')

    if(!isMobileMenuClosed || !isMenuDesktopClosed){
        menuMobile.classList.add('inactive')
        menuDesktop.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}