const hamburguer = document.querySelector(".ham-menu");
const nav = document.querySelector(".headerMenu");

hamburguer.addEventListener("click", () => 
nav.classList.toggle("navActive"));