const nums = [1, 2, 2, 3, 4, 4, 4, 5];

function duplicates(nums) {
    const repetidos = nums.filter((numero, posicion) => {nums.indexOf(numero) !== posicion});
    const unicos = new Set(repetidos);
    console.log(unicos.size);
}

duplicates(nums);
// Aca filtraria agregando a repetidos ya que indexOf nos da la primera posicion donde apareg4e, entoces si aparece mas de una vez indexOf(numero) !== posicion y se agrega a la lista de repetidos.
// Se hace el set para eliminar la cantidad repetida de veces (en este caso: 2, 4, 4 -> 2, 4)