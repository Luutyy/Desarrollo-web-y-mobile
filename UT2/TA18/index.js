const personas = [
    "Juan",
    "Rodrigo",
    "Federico",
    "Tomas",
    "Agustina",
    'Lautaro',
    'Simone',
    'Alejandro',
    'Nicolas',
    'Tiago',
    'Carolina',
    'Carlos',
    'Veronica',
    'Marcos',
    'Luca'
]
const lista = document.getElementById("lista");
const busqueda = document.getElementById("busqueda");

function mostrarPersonas(personas) {
    lista.innerHTML = "";

    for(const persona of personas) {
        let li = document.createElement("li");
        li.textContent = persona;
        lista.appendChild(li);
    }
}

mostrarPersonas(personas);

busqueda.addEventListener("input", () => {
    const texto = busqueda.value.toLowerCase();

    const personasFiltradas = personas.filter(persona =>
        persona.toLowerCase().includes(texto)
    )
    mostrarPersonas(personasFiltradas)
})