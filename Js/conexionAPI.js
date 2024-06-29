let contenedorPeliculas =document.getElementById("peliculas")
//rickandmortyapi.com  dentro pagina muestra que endpoint necesito 
//pegarle para que me traiga esa informacion

fetch("https://rickandmortyapi.com/api/character")
.then((Response)=>Response.json())
.then((datos)=>{
    console.log(datos)
    console.log(datos.results)
    datos.results.forEach(elementos => {
       //console.log(elementos.name)
       const contenedorCreado =document.createElement('div')
       contenedorCreado.innerHTML = `
       <h4>${elementos.name}</h4>
       <img src="${elementos.image}">

       `;
       contenedorPeliculas.append(contenedorCreado)
    });
})