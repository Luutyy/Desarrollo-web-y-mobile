const API_URL = "http://localhost:3000/users";

const lista = document.getElementById("users");

const nombre = document.getElementsByName("name")[0];
const email = document.getElementsByName("email")[0];
const role = document.getElementsByName("role")[0];
const boton = document.getElementById("add");




function agregarUsuario(usuario){
    let li = document.createElement("li");
    li.textContent = `ID: ${usuario.id}. Nombre: ${usuario.name}. Rol: ${usuario.role}. Email: ${usuario.email}.`

    lista.appendChild(li);
}

function cargarUsuarios(){
    lista.innerHTML = "";
    fetch(API_URL)
        .then(response => response.json())
        .then(usuario => usuario.forEach(agregarUsuario))
        .catch(error => console.error("Error cargando usuarios: ", error));
}

function postUsuario(usuario){
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(usuario)
    })
        .then(response => response.json())
        .then(() => {
            cargarUsuarios();
        })
        .catch(error => console.error("Error guardando usuario: ", error))
}

function crearUsuario(){
      const usuario = {
        name: nombre.value,
        email: email.value,
        role: role.value,
  };

  postUsuario(usuario);

  nombre.value = "";
  email.value = "";
  role.value = "";
}

boton.addEventListener("click", crearUsuario)

function onload() {
    cargarUsuarios();
}