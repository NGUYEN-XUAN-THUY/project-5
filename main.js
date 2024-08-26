const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const cta = document.querySelector(".cta");
btn.addEventListener("click", () =>{
    input.classList.toggle("hide");
    input.focus();
});