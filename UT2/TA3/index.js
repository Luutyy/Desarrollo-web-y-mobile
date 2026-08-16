function removeFromArray(array, item){
    let posicion = array.indexOf(item);
    if (posicion != -1){
        array.splice(posicion, 1); // Elimino uno a partire de la posicion del item (basicamente elimino el item)
    }

    console.log(array)
}

removeFromArray(["Hola", "Como", "Bien" ,"Estas"], "Bien")