window.onload=()=>{

const burger=document.querySelector(".burger-menu")
const colaps=document.querySelector(".navbar")
const burgermodele=document.querySelector(".burger-menu-types")
const colapsmodele=document.querySelector(".types")


burger.addEventListener("click", ()=>{
    if(colaps.classList.contains("navbar-active"))
    colaps.classList.remove("navbar-active");
    else colaps.classList.add("navbar-active");
} )

burgermodele.addEventListener("click", ()=>{
    if(colapsmodele.classList.contains("types-active"))
    colapsmodele.classList.remove("types-active");
    else colapsmodele.classList.add("types-active");
} )
}