/*
# Ejercicio 02.

Implementar la función que toma una lista de datos de países como los del
archivo `americas.json` y retorna los códigos CCA2 de los países que usan una
moneda dada. Por ejemplo:

```js
import americas from "./americas.json";

countriesForCurrency(americas, "EUR") // Euro
```

debería devolver:

```js
["BL", "GF", "MF", "GP", "PM", "MQ"]
```

Si un elemento no tiene alguna de las propiedades requeridas, se debe arrojar un
error.
*/

export function countriesForCurrency(data, currency) {
  const listaPaises = [];
  for(const pais of data){
    if(!pais.cca2 || !pais.currencies){
      throw new Error("Falta una propiedad requerida en un país");
    }

    if(currency in pais.currencies){
      listaPaises.push(pais.cca2);
    }
  }
  return listaPaises;
}

import americas from "./americas.json" with { type: "json" };

countriesForCurrency(americas, "EUR") // Euro