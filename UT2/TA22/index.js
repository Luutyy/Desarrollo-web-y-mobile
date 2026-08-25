const tamano = document.getElementById("tamano");

function mostrarTamano(){
    tamano.textContent = `Ancho: ${window.innerWidth}, Largo: ${window.innerHeight}`
}

window.addEventListener("resize", mostrarTamano);

mostrarTamano();