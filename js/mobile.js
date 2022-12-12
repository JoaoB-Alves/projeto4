/*getting menu button */
const button = document.querySelector(".menu");
const button2 = document.querySelector(".menu2");

button.addEventListener("click", openMenu);
button2.addEventListener("click", closeMenu);

function openMenu(){
const nav = document.getElementsByTagName("nav")[0].classList;
const menu = document.querySelector(".menu-container2");
const login = document.querySelector(".login-container");
const login2 = document.querySelector(".login-container2");
const hiddenUl = document.querySelector(".hidden-ul");
nav.add("nav-active");
menu.style.display = "flex";
login.style.display = "none";
login2.style.display = "flex";
hiddenUl.style.display = "flex";

}

function closeMenu(){
const nav = document.getElementsByTagName("nav")[0].classList;
const menu = document.querySelector(".menu-container2");
const login = document.querySelector(".login-container");
const login2 = document.querySelector(".login-container2");
const hiddenUl = document.querySelector(".hidden-ul");
nav.remove("nav-active");
menu.style.display = "none";
login.style.display = "flex";
login2.style.display = "none";
hiddenUl.style.display = "none";

}
