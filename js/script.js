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

