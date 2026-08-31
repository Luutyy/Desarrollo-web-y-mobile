/*
# Ejercicio 03.

Reemplazar este código con lo necesario para implementar lo solicitado en el
ejercicio.
*/

let colorBody;
let colorTexto;

const API_URL = "http://localhost:3000/combos";

function onLoad() {
  generarCombo()
  cargarHistorial();
}

function generarCombo(){
  const body = document.body;
  const texto = document.getElementById("preview");

  colorBody = randomColor();
  colorTexto = randomColor();

  body.style.backgroundColor = colorBody ;
  texto.style.backgroundColor = colorTexto;
}

function cargarHistorial(combo){
    document.getElementById("history").innerHTML = "";
    fetch(API_URL)
        .then(response => response.json())
        .then(combo => combo.forEach(crearHistorial))
        .catch(error => console.error("Error cargando usuarios: ", error));
}


function crearHistorial(combo){
    const contenedor = document.getElementById("history");

    const div = document.createElement("div");
    div.className = "combo"
    div.style.backgroundColor = combo.body;
    div.style.color = combo.texto;

    let colores = document.createElement("span");
    colores.textContent = `${combo.body} / ${combo.texto}`; 
    colores.className = "combo-colors";

    const emoji = document.createElement("span");
    if(combo.aprobado){
      emoji.textContent = "👍";
    }  else{
      emoji.textContent = "👎";
    }
    emoji.className = "combo-verdict";


    div.appendChild(colores);
    div.appendChild(emoji);
    contenedor.appendChild(div)
}

function onApprove() {
  crearCombo(true);
  generarCombo();
}

function onReject() {
  crearCombo(false)
  generarCombo();
}

function crearCombo(aprobado){
  const combo = {
    body: colorBody,
    texto: colorTexto,
    aprobado: aprobado,
  } 
  postCombo(combo)
}

function postCombo(combo){
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(combo)
  })
    .then(response => response.json())
    .then(cargarHistorial)
    .catch(error => console.error("Error guardando el combo: ", error))
}

async function fetchJSON(path, options) {
  const resource = new URL(path, window.location);
  const response = await window.fetch(resource, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}

function randomColor() {
  return `#${Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0'),
  ).join('')}`;
}
