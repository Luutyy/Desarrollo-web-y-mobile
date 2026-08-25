function mostrarOcultar(){
    const texto = document.getElementById("texto");
    if(texto.style.display == "none") {
        texto.style.display = "block";
    } else{
        texto.style.display = "none";
    }
}

const boton = document.getElementsByName("boton")
boton.addEventListener("click", mostrarOcultar);