//evento de clik en el  boton
//funciones matematicas y funciones literales
//primero al boton creado en html lo llamo seleccionando el nodo donde esta 
//poiendo la ruta de acceso al nodo con selector
const btn=document.querySelector("button");
function random(numero){return Math.floor(Math.random()*(numero+1))

}
function cambiarColor(){
    const colorRandom = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background=colorRandom;
}
btn.addEventListener("click",cambiarColor);
btn2.addEventListener("click"),()=>{} //funcion anonima

//evento de imput de registracion