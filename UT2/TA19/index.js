const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");

const errorNombre = document.getElementById("errorNombre");
const errorCoreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");

function validarNombre(){
    if(nombre.value.trim() === ""){
        errorNombre.textContent = "El nombre es obligatorio";
        return false;
    } 

    errorNombre.textContent = "";
    return true;
}

function validarCorreo(){
    if(correo.value.trim() === "" || !correo.value.trim().includes("@")){
        errorCoreo.textContent = "El correo no es valido";
        return false
    }

    errorCoreo.textContent = "";
    return true;
}

function validarPassword() {
    if(password.value.trim().length < 8){
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }

    errorPassword.textContent = "";
    return true;
}

nombre.addEventListener("input", validarNombre)
password.addEventListener("input", validarPassword)
correo.addEventListener("input", validarCorreo)

formulario.addEventListener("submit", (event) => {
    const nombreValido = validarNombre();
    const passwordValida = validarPassword();
    const correoValido= validarCorreo();

    if(!nombreValido || !passwordValida || !correoValido){
        event.preventDefault();
    }
})
