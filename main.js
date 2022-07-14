const btn_menu = document.querySelector(".navbar__button")
const nav_menu = document.querySelector(".nav__interior")

btn_menu.addEventListener("click", function(){
    nav_menu.classList.toggle("active")
})