
//variables
let email = document.getElementById("correo");
let password = document.getElementById("contrasenia");
let botonLogin = document.getElementById("boton-enviar");
let alerta = document.querySelector('.alert');
//Datos DB falsos
let emailDB = "admin@example.com";
let pwdBD = "admin123";

//Listeners
botonLogin.addEventListener("click", function(e){
    e.preventDefault();
    login();
    
})

//functions

function login(){
    if(email.value == emailDB && password.value == pwdBD){
        //Browser Object Model
        let nombreUsuario  = email.value.split("@")[0];
        localStorage.setItem("user",nombreUsuario);
        window.location.href="home.html";
    }else{
        alerta.classList.remove("d-none");
        ocultarAlerta();
    }
}

function ocultarAlerta(){
    setTimeout(()=>{
        alerta.classList.add("d-none");
    },3500);
}

//timers
//setTImeout => esperar cierto tiempo y realizará una acción. SOLO SE REALIZARá ESA ACCIÖN UNA VEZ
//setInterval => realizar una acción cada cierto tiempo