/*
# Ejercicio 03.

La función `rollDie` está asociada al click en el dado. Al ejecutarse debe
definir un valor aleatorio entre 1 y 6 y mostrar los pips de la manera estándar.
*/
function rollDie() {
  let random = Math.floor(Math.random() * 6) + 1;
  const pip11 = document.getElementById("pip11")
  const pip12 = document.getElementById("pip12")
  const pip13 = document.getElementById("pip13")
  const pip21 = document.getElementById("pip21")
  const pip22 = document.getElementById("pip22")
  const pip23 = document.getElementById("pip23")
  const pip31 = document.getElementById("pip31")
  const pip32 = document.getElementById("pip32")
  const pip33 = document.getElementById("pip33")
  
  switch(random){
    case 1:
      pip11.textContent = "⬤";
      pip12.textContent = "⬤";
      pip13.textContent = "⬤";
      pip21.textContent = "⬤";
      pip22.textContent = "⚫";
      pip23.textContent = "⬤";
      pip31.textContent = "⬤";
      pip32.textContent = "⬤";
      pip33.textContent = "⬤";
      break;
    
    case 2:
      pip11.textContent = "⚫";
      pip12.textContent = "⬤";
      pip13.textContent = "⬤";
      pip21.textContent = "⬤";
      pip22.textContent = "⬤";
      pip23.textContent = "⬤";
      pip31.textContent = "⬤";
      pip32.textContent = "⬤";
      pip33.textContent = "⚫";
      break;

    case 3:
      pip11.textContent = "⚫";
      pip12.textContent = "⬤";
      pip13.textContent = "⬤";
      pip21.textContent = "⬤";
      pip22.textContent = "⚫";
      pip23.textContent = "⬤";
      pip31.textContent = "⬤";
      pip32.textContent = "⬤";
      pip33.textContent = "⚫";
      break;
    
    case 4:
      pip11.textContent = "⚫";
      pip12.textContent = "⬤";
      pip13.textContent = "⬤";
      pip21.textContent = "⚫";
      pip22.textContent = "⬤";
      pip23.textContent = "⬤";
      pip31.textContent = "⚫";
      pip32.textContent = "⬤";
      pip33.textContent = "⚫";
      break;

    case 5:
      pip11.textContent = "⚫";
      pip12.textContent = "⬤";
      pip13.textContent = "⬤";
      pip21.textContent = "⚫";
      pip22.textContent = "⚫";
      pip23.textContent = "⬤";
      pip31.textContent = "⚫";
      pip32.textContent = "⬤";
      pip33.textContent = "⚫";
      break;
  
    case 6:
      pip11.textContent = "⚫";
      pip12.textContent = "⬤";
      pip13.textContent = "⚫";
      pip21.textContent = "⚫";
      pip22.textContent = "⬤";
      pip23.textContent = "⚫";
      pip31.textContent = "⚫";
      pip32.textContent = "⬤";
      pip33.textContent = "⚫";
      break;
  }  
}
