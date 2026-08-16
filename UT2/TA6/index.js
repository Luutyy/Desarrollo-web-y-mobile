function convertToCelsius(temp){
    let result = (temp - 32) * 5 / 9;
    console.log(result.toFixed(1)) // toFixed asegura la cantidad d digitos despues del decimal
}

function convertToFahrenheit(temp){
    let result = (temp * 9 / 5) + 32;
    console.log(result.toFixed(1));
}

convertToCelsius(100)
convertToFahrenheit(100)