function repeatString(text,repeticiones){
    const resultado = document.getElementById("result")
    for(let i = 0; i < repeticiones; i++){
        let p = document.createElement("p");
        p.textContent = text; 
        resultado.appendChild(p);
    }
}
const form = document.getElementById("form");
form.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue

    let texto = document.getElementById('texto').value;
    let numero = document.getElementById('numero').value;
    repeatString(texto, numero);
})