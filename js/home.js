let titulo = document.querySelector('.title');
let botonLogout = document.querySelector('.logout');

recuperarUsuario();
//titulo.textContent = "Bienvenido "+ recuperarUsuario();

//listeners
botonLogout.addEventListener("click",cerrarSesion);

//functions

function cerrarSesion(){
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

function recuperarUsuario(){
    titulo.textContent = `Bienvenido ${localStorage.getItem("user")}`;
}
