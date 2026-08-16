function getOdds(nums){
    let impares = nums.filter(numero => numero % 2 !== 0);
    console.log(impares);
}

getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// Filter crea un nuevo array con los elementos que cumplan la condicion numero % 2 !== 0