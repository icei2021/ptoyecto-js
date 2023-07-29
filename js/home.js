//variables
let titulo = document.querySelector('.title');
let botonLogout = document.querySelector('.logout');
let textoTarea = document.querySelector('#tarea');
let botonAgregar = document.querySelector('#boton-agregar');
let listaTareas = document.querySelector('#lista-tareas');
let alerta = document.querySelector('#alerta');
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let botonEliminar = document.querySelector('#boton-eliminar');
recuperarUsuario();
evaluarTareas();
mostrarTareas();
//titulo.textContent = "Bienvenido "+ recuperarUsuario();

//listeners
botonLogout.addEventListener("click",cerrarSesion);
botonAgregar.addEventListener("click", agregarTarea);
botonEliminar.addEventListener("click", limpiarLista);

//functions
function cerrarSesion(){
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

function recuperarUsuario(){
    titulo.textContent = `Bienvenido ${localStorage.getItem("user")}`;
}

function agregarTarea(){
    let tarea = textoTarea.value;
    let etiquetaLi = document.createElement("li"); //<li></li>
    //etiquetaLi.textContent = tarea;  //<li>molestar</li> 
    etiquetaLi.classList.add("list-group-item");//<li class="list-group-item"></li>
    let texto = document.createTextNode(tarea); //texto
    etiquetaLi.append(texto)//<li class="list-group-item">texto</li>
    listaTareas.appendChild(etiquetaLi)//<ul><li></li>   <li class="list-group-item">texto</li></ul>
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas(){
    tareas.forEach(elemento => {
        let etiquetaLi = document.createElement("li"); //<li></li>
        //etiquetaLi.textContent = tarea;  //<li>molestar</li> 
        etiquetaLi.classList.add("list-group-item");//<li class="list-group-item"></li>
        let texto = document.createTextNode(elemento); //texto
        etiquetaLi.append(texto)//<li class="list-group-item">texto</li>
        listaTareas.appendChild(etiquetaLi)//<ul><li></li>  
    });
}

function evaluarTareas(){
    console.log("Arreglo tareas: ",tareas)
    // if(tareas.length == 0){
    //     alerta.classList.remove("d-none");
    // }
}

function limpiarLista(){
    //tareas=[];
    localStorage.removeItem("tareas") 
    while(listaTareas.firstChild){
        listaTareas.removeChild(listaTareas.firstChild);
    }
    tareas=[];
}