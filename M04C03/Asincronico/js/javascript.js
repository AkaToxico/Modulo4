let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");
let nuevaTarea = inputPrincipal.value;

class Item{
    
    constructor (nuevaTarea){
        this.crearDiv(nuevaTarea);
        let nuevoDiv = document.createElement("div");
        container.appendChild(nuevoDiv);
        let nuevoInput = document.createElement("input");
        nuevoDiv.appendChild(nuevoInput)
        
    };

    
    crearDiv(nuevaTarea) {
    
    }
}