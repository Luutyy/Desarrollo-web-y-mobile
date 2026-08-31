/*
# Ejercicio 02.

Se necesita generar expresiones aritméticas simples aleatorias para una app web
de matemáticas. Las expresiones pueden ser sumas, restas, multiplicaciones o
divisiones entre números.

Se debe implementar la función de generación genExp, que toma un resultado y
retorna una expresión aleatoria.

Por ejemplo:

+ genExp(5) = { operator: '+', left: 2, right: 3 }
+ genExp(6) = { operator: '*', left: 2, right: 3 }
+ genExp(11) = { operator: '-', left: 20, right: 9 }
+ genExp(2) = { operator: '/', left: 8, right: 4 }
+ genExp(2) = { operator: '-', left: 5, right: 3 }
+ genExp(7) = { operator: '+', left: 2, right: 5 }

Sugerencia: Usar `Math.random()` para generar números aleatorios.
*/

export function genExp(resultado) {
  const operadores = ['+', '-', '*', '/'];
  const operator = operadores[Math.floor(Math.random() * operadores.length)];
  let left;
  let right;

  switch (operator) {
    case '+': {
      left = Math.floor(Math.random() * 10) + 1;
      right = resultado - left;
      break;
    }

    case '-': {
      left = Math.floor(Math.random() * 10) + 1;
      right = resultado + left;
      break;
    }

    case '*': {
      const divisores = [];
      for (let i = 1; i <= Math.abs(resultado) || i === 1; i++) {
        if (i !== 0 && resultado % i === 0) divisores.push(i);
      }
      if (divisores.length === 0) {
        left = 0;
        right = Math.floor(Math.random() * 10) + 1;
      } else {
        right = divisores[Math.floor(Math.random() * divisores.length)];
        left = resultado / right;
      }
      break;
    }

    case '/': {
      right = Math.floor(Math.random() * 9) + 1;
      left = resultado * right;
      break;
    }
  }

  return { operator, left, right };
}