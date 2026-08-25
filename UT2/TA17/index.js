function aumentar(){
    const numero = document.getElementById("numero");
    numero.textContent = parseInt(numero.textContent) + 1;
}

const boton = document.getElementById("boton");
boton.addEventListener("click", aumentar);