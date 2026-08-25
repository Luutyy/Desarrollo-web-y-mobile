function cambiarTexto(){
    document.getElementById("texto").textContent = "Texto Cambiado"

}

const button = document.getElementById("boton");
button.addEventListener("click", cambiarTexto)