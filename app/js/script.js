const btnBurger = document.querySelector("#burger");
const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".burger");
const closebtn = document.querySelector(".close");
const mobileIntro = document.querySelector(".img-mobile");

btnBurger.addEventListener('click', function() {

  if(menu.classList.contains("show-menu")) {
    closebtn.classList.remove("close-btn");
    burger.classList.remove("burger-btn");
    menu.classList.remove("show-menu");
    mobileIntro.classList.remove("hide-for-menu");
  }

  else{
    closebtn.classList.add("close-btn");
    burger.classList.add("burger-btn");
    menu.classList.add("show-menu");
    mobileIntro.classList.add("hide-for-menu");
  }
})