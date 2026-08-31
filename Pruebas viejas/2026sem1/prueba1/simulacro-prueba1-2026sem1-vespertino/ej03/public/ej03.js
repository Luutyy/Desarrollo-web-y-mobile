/*
# Ejercicio 03.

Reemplazar este código con lo necesario para implementar lo solicitado en el
ejercicio.
*/
async function onLoad() {
  const data= await fetchJSON("http://localhost:3000/colors", {method: "GET"});
   for (let color of data){
      agregarColor(color);
    }
}

function onAddColor() {
  const redIn= document.getElementById("red").value;
  const geenIn= document.getElementById("green").value;
  const blueIn= document.getElementById("blue").value;

  let color = {id: generateID(), red: Number(redIn), green: Number(geenIn), blue: Number(blueIn)  }
  postColor(color);
}
/*
La API tiene una única entidad `colors`. Los objetos a guardar dentro de la
misma deben tener la forma:

```javascript
{ id: "some-id", red: 100, green: 150, blue: 200 }
```

Los _endpoints_ a utilizar en el ejercicio son:

+ `GET /colors` para obtener la lista de los colores guardados.

+ `POST /colors` para agregar un color nuevo. */

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

/*FUNCIONES AUXILIARES */

function agregarColor(color){
  const divColor = document.createElement("div");
  divColor.className="color";

  let colorRgb = `rgb(${color.red}, ${color.green}, ${color.blue}`;

  divColor.style.backgroundColor= colorRgb;
  divColor.style.color= `contrastColor(colorRgb)`;
  divColor.textContent= `rgb(${color.red}, ${color.green}, ${color.blue}`;

  const contenedor = document.getElementById("colors")
  contenedor.appendChild(divColor);
}

function postColor(color){
  fetch("http://localhost:3000/colors", {
  method: `POST`,
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(color)
  })
.then(response => response.json())
.then(data => {console.log("Respuesta:", data)})
.catch(error => console.error("Error:", error));
}

function generateID(){
    const minusculas= [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'ñ', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w',
        'x', 'y', 'z'
    ]
    const mayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'Ñ', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W',
        'X', 'Y', 'Z'
    ]
    const numeros =[
        "0","1","2","3","4","5","6","7","8","9",
        "0","1","2","3","4","5","6","7","8","9",
        "0","1","2","3","4","5","6",
    ]
    const simbolos = [
        '!', '"', '#', '$', '%', '&',
        "'", '(', ')', '*', '+', ',',
        '-', '.', '/', ':', ';', '<',
        '=', '>', '?', '@', '[', ']',
        '^', '_', '~'
    ]
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
        let id= [];
        id.push(minusculas[Math.floor(Math.random()*26)]);
        id.push(mayusculas[Math.floor(Math.random()*26)]);
        id.push(minusculas[Math.floor(Math.random()*26)]);
        id.push(mayusculas[Math.floor(Math.random()*26)]);
        id.push(numeros[Math.floor(Math.random()*26)]);
        id.push(numeros[Math.floor(Math.random()*26)]);
        id.push(simbolos[Math.floor(Math.random()*26)]);
        id.push(simbolos[Math.floor(Math.random()*26)]);
        id = shuffle(id);
        return id.join("");
}