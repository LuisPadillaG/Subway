const uber = document.querySelector("#uber");
const contenedor = document.querySelector(".cot-parallax")
const rappi = document.querySelector("#rappi");
const perrito = document.querySelector("#perrito")
const hojas = document.querySelector("#hojas");
const titulo = document.querySelector("#titulo");
let clickeado = false;
/*let permite modificar (para arreglos)
const es constante, no cambia
*/ 

/*
function clickB(){
    montana.style.width = "300px";
    contenedor.style.backgroundColor  = "red";
}*/
/*Va a agregar un elemento a nuestra pagina*/ 
window.addEventListener("scroll", () => {
    let scrolly = window.scrollY;
    console.log(scrolly);

    titulo.style.top = scrolly * 0.3 + "px";
    uber.style.bottom = scrolly * 1 + "px";
    perrito.style.bottom = scrolly * 2.3 + "px";
    rappi.style.bottom = scrolly * 2 + "px";
    //hojas.style.top = scrolly * 2.2 + "px";
});
