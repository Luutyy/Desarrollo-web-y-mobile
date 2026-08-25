function anadirElemento(txto){
    const lista = document.getElementById("lista");
    const input = document.getElementById("texto");
    let li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = ""
}

function eliminarUltimo(){
    const lista = document.getElementById("lista");
    const ultimoElemento = lista.lastElementChild;
    if(ultimoElemento){
        ultimoElemento.remove();
    }
}
 
const anadir = document.getElementById("anadir");
const eliminar = document.getElementById("eliminar");
anadir.addEventListener("click", anadirElemento);
eliminar.addEventListener("click", eliminarUltimo);