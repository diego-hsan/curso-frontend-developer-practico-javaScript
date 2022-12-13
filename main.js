const menuEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')
const menuIcon= document.querySelector('.menuIcon')
const menuMobile =document.querySelector('.mobile-menu')

menuEmail.addEventListener('click',toggledesktopMenu)

function toggledesktopMenu(){
    menuDesktop.classList.toggle('inactive')
}

menuIcon.addEventListener('click',toggleMenuMobile)

function toggleMenuMobile(){
    menuMobile.classList.toggle('inactive')
}