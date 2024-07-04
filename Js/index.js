//evento de clik en el  boton
//funciones matematicas y funciones literales
//primero al boton creado en html lo llamo seleccionando el nodo donde esta 
//poniendo la ruta de acceso al nodo con selector
const btnColor=document.querySelector("searchButton");
function random(numero){return Math.floor(Math.random()*(numero+1))
}
function cambiarColor(){
    const colorRandom = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background=colorRandom;
}
searchButton.addEventListener("click",cambiarColor);

//cambia el color de fondo del boton de registro

//btn2.addEventListener("click"),()=>{} //funcion anonima
btnIniciarSesion.addEventListener("mouseenter"),function () { btnIniciarSesion.backgroundColor = "#9f3647"; } 





function action() {
 alert("Debe completar los campos!");
};

//button.addEventListener("click", action);

//evento de imput de registracion

// Declaración
function saludarDos(miNombre){
  console.log("Hola " + miNombre)
  }

//Ejecución
saludarDos("Codo a Codo") //Argumento fijo
var nombre= prompt("Ingrese su nombre")
saludarDos(nombre) //Argumento variable

// Declaración
function mayoriaEdad(miApellido, miNombre, miEdad){
  console.log("Apellido y nombre: " + miApellido + ", " + miNombre)
  if (miEdad >= 18) {
  console.log("Es mayor de edad " + "(" + miEdad + ")")}
  else{
  console.log("No es mayor de edad " + "(" + miEdad + ")")}
  }

//Ejecución
var ape= prompt("Ingrese su apellido")
var nom= prompt("Ingrese su nombre")
var edad= prompt("Ingrese su edad")
mayoriaEdad(ape, nom, edad)  

//muestra mensaje en el boton de conexion con la API
const btnConexionAPI = document.querySelector("Conexion APIbutton");

function action() {
  alert("Debe Iniciar sesion para conectarse con la API de Peliculas");
};

btnConexionAPI.addEventListener("click", action);


//Armamos las rutas de los nodos
const btnAnterior=document.getElementById("btnAnterior");
const btnSiguiente=document.getElementById("btnSiguiente");
const contenedor =document.getElementById("contenedor");
//Para armar la informacion que traemos de la API en un contenedor de boostrap car
//Hacemos una funcion asincronica aqui anonima o la funcion flecha
let pagina =1;
btnAnterior.addEventListener("click",()=>{  //Eventos de los botones anterior y siguiente
    if(pagina >1){
        pagina -=1;
        cargarPeliculas();
    }
});
btnSiguiente.addEventListener("click",()=>{
    if(pagina <1000){
        pagina +=1;
        cargarPeliculas();
    }
});
const cargarPeliculas = async()=>{
    try{
      //https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1
      //  const respuesta =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b9d315d2b4b5d8bfdc91fed0961682e4&languaje=es-MX&page=${pagina}`);
      //API de la Profe  
      const respuesta =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1 `);
      console.log(respuesta);
      if(respuesta.status ===200){
        const datos = await respuesta.json();
        console.log(datos); 
        let peliculas = [];
        datos.results.forEach(pelicula =>{
            peliculas+=`
            <div class="card pelicula" style= "witch:20rem;">
              <img src"https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
              <div class="card-body">
               <h5 class="card-title titulos">${pelicula.title} </h5>
               <p class= "card-text descripcion">${pelicula.overview}</p>
              </div>
            </div> 
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
