let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item{
    
    constructor (nuevaTarea){
        this.crearDiv(nuevaTarea);
        let nuevoDiv = document.createElement("div");
        container.appendChild(nuevoDiv);
        let nuevoInput = document.createElement("input");
        nuevoDiv.appendChild(nuevoInput)
        
    };

    
    crearDiv(nuevaTarea) {
        var inputItem = document.createElement("input");
        inputItem.setAttribute("type","text");
        inputItem.setAttribute("disabled","true");
        inputItem.classList.add("item-input");
        inputItem = nuevaTarea;
        var nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");
    
    
    
    //Bonton EDITAR------------------------------------------
    
    var botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");
    botonEditar.addEventListener("click", function(e){
        inputItem.removeAttribute("disabled");
        if (inputItem.disable = !inputItem.disable){
        botonEditar.innerHTML =  "<i class='fas fa-lock-open'></i>";
        }else{
            botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            inputItem.setAttribute("disabled","true");
        } 
    })
    

    //Boton REMOVER------------------------------------------
    
        var botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");
        botonRemover.addEventListener("click", function(e){
            container.removeChild(nuevoDiv);
        })
    


    //Agregar elementos a la lista---------------------------
    
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);
        container.appendChild(nuevoDiv);
 
    } 
}   

function chequearInput(e){
    if(inputItem = Text){
        
        
    }


}