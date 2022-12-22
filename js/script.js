const burger = document.querySelector("#nav-icon3");
const navList = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const contactBtn = document.querySelector(".contact__btn");

burger.addEventListener("click", function() {
    burger.classList.toggle("open");
    navList.classList.toggle("active");
})
contactBtn.addEventListener("click", function() {
    alert("Повторите позже!")
})

for (let i = 0; i < navLink.length; i++) {
    const element = navLink[i];
    element.addEventListener("click", function() {
        burger.classList.toggle("open");
        navList.classList.toggle("active");
    })
    
}

new WOW().init({
    mobile:       true,
});

let navLangs = document.querySelector(".nav__langs");
let navLanguage = document.querySelector(".nav__language");
let navLanguageIcon = document.querySelector(".nav__language-icon");

navLanguage.addEventListener("click", function() {
    navLangs.classList.toggle("active")
    navLanguageIcon.classList.toggle("active")
})


