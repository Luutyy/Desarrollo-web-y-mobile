function createParagraph() {
    const para = document.createElement("p");
    para.textContent = prompt("Que queres poner?");
    document.body.appendChild(para);
}

function updateName() {
    const name = prompt("Inserte nuevo nombre");
    nameButton.textContent = `Tu nombre es: ${name}` 
}

const nameButton = document.getElementById("NuevoNombre")
const paraButton = document.getElementById("NuevoParrafo");

nameButton.addEventListener("click", updateName)
paraButton.addEventListener("click", createParagraph)

/*
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
} Para mas de un boton
*/