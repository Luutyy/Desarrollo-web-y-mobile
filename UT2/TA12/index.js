function generatePassword(largo){
    let valido = false;
    let contra = "";
    while(valido != true){
        for(let i = 0; i < largo ; i++){
            contra += caracterRandom();
        }
        if(cosasEspeciales(contra)){
            valido = true;
        } else{
            contra = "";
        }
    }
    return contra;
}

function caracterRandom(){
    const letras = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM1234567890!@#$%^&*()_+";
    return letras[Math.floor(Math.random() * letras.length)]
}

function cosasEspeciales(pass){
    const min = "qwertyuiopasdfghjklñzxcvbnm";
    const may = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    const num = "1234567890";
    const esp = "!@#$%^&*()";

    const tieneMin = [...pass].some(letra => min.includes(letra)); // se fija si al menos 1 elemento del array cumple con la condicion
    const tieneMay = [...pass].some(letra => may.includes(letra));
    const tieneNum = [...pass].some(letra => num.includes(letra));
    const tieneEsp = [...pass].some(letra => esp.includes(letra));

    if (tieneMin && tieneMay && tieneNum && tieneEsp) {
        return true;
    } else{
        return false;
    }
}

console.log(generatePassword(8))
console.log(generatePassword(8))