function anadirElemento(txto){
    const lista = document.getElementById("lista");
    const input = document.getElementById("texto");
    let li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = ""
}
 
const button = document.getElementById("boton");
button.addEventListener("click", anadirElemento)