//evento de clik en el  boton
//funciones matematicas y funciones literales
//primero al boton creado en html lo llamo seleccionando el nodo donde esta 
//poniendo la ruta de acceso al nodo con selector
const btn=document.querySelector("button");
function random(numero){return Math.floor(Math.random()*(numero+1))

}
function cambiarColor(){
    const colorRandom = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background=colorRandom;
}
searchButton.addEventListener("click",cambiarColor);
//btn2.addEventListener("click"),()=>{} //funcion anonima

//evento de imput de registracion

//Armamos las rutas de los nodos
const btnAnterior=document.getElementById("btnAnterior");
const btnSiguiente=document.getElementById("btnSiguiente");
const contenedor =document.getElementById("contenedor");
//Para armar la informacion que traemos de la API en un contenedor de boostrap car
//Hacemos una funcion asincronica aqui anonima o la funcion flecha
let pagina =1;
btnAnterior.accessKeyLabel("click",()=>{  //Eventos de los botones anterior y siguiente
    if(pagina >1){
        pagina -=1;
        cargarPeliculas();
    }
})
btnSiguiente.accessKeyLabel("click",()=>{
    if(pagina <1000){
        pagina +=1;
        cargarPeliculas();
    }
})
const cargarPeliculas = async()=>{
    try{
      const respuesta =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b9d315d2b4b5d8bfdc91fed0961682e4&languaje=es-MX&page=${pagina}`); 
      console.log(respuesta);
      if(respuesta.status ===200){
        const datos = await respuesta.json();
        console.log(datos); 
        let peliculas = [];
        datos.results.forEach(peliculas =>{
            peliculas+=`
            <div class="card peliculas" style= "witch:15rem;">
            <img src"https://image.tmdb.org/t/p/w500/${peliculas.poster_path}" class="card-img-top">
            <div>
            <h5 class="card-title titulo">$${peliculas.title} </h5>
            <p class= "card-text descripcion">${peliculas.overview}</p>
            `;
        });
        contenedor.innerHTML = peliculas;//devuelve las peliculas al contenedor de html
      }  
    }
    catch(error){
        console.log(error.message);
    }

}
cargarPeliculas();
