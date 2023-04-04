const burger = document.querySelector("#menu-burger");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//abrir menu al presionar el icono.

burger.addEventListener("click", () =>{
    ul.classList.toggle("show");
});

// cerrar el menu cuando se hace click en el enlace.

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () =>{
        ul.classList.remove("show");
    })
    );