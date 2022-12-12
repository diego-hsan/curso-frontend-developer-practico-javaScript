const menuEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click',toggledesktopMenu)

function toggledesktopMenu(){
    menuDesktop.classList.toggle('inactive')
}