//Active class
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

li.forEach(el => {
    el.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    });
})

//Nav list
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
});

//Search
let search = document.querySelector(".fa-search");
let searchList = document.querySelector(".search");

search.addEventListener("click", () => {
    searchList.classList.toggle("activeSearch");
});
