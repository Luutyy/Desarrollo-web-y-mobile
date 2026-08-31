/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/





const button = document.getElementById('content');
button.addEventListener("click", showRandomDigit)

function showRandomDigit() {
  const a = document.getElementById('seg-a');
  const b = document.getElementById('seg-b');
  const c = document.getElementById('seg-c');
  const d = document.getElementById('seg-d');
  const e = document.getElementById('seg-e');
  const f = document.getElementById('seg-f');
  const g = document.getElementById('seg-g');
  
  const random = Math.floor(Math.random() * 9) + 1; // del 1 al 9
  switch(random){
    case 0:
      a.style.display = "block";
      b.style.display = "block";
      c.style.display = "block";
      d.style.display = "block";
      e.style.display = "block";
      f.style.display = "block";
      g.style.display = "none";
      break;
    case 1:
      a.style.display = 'none';
      b.style.display = 'block';
      c.style.display = 'block';
      d.style.display = 'none';
      e.style.display = 'none';
      f.style.display = 'none';
      g.style.display = 'none';
      break;
    case 2:
      a.style.display = 'block';  
      b.style.display = 'block';  
      c.style.display = 'none'; 
      d.style.display = 'block';  
      e.style.display = 'block';  
      f.style.display = 'none'; 
      g.style.display = 'block';  
      break;
    case 3:
      a.style.display = 'block';
      b.style.display = 'block';
      c.style.display = 'block';
      d.style.display = 'block';
      e.style.display = 'none';
      f.style.display = 'none';
      g.style.display = 'block';
      break;
    case 4:
      a.style.display = 'none';
      b.style.display = 'block';
      c.style.display = 'block';
      d.style.display = 'none';
      e.style.display = 'none';
      f.style.display = 'block';
      g.style.display = 'block';
      break;
    case 5:
      a.style.display = 'block';
      b.style.display = 'none';
      c.style.display = 'block';
      d.style.display = 'block';
      e.style.display = 'none';
      f.style.display = 'block';
      g.style.display = 'block';
      break;
    case 6:
      a.style.display = 'block';
      b.style.display = 'none';
      c.style.display = 'block';
      d.style.display = 'block';
      e.style.display = 'block';
      f.style.display = 'block';
      g.style.display = 'block';
      break;
    case 7:
      a.style.display = 'block';
      b.style.display = 'block';
      c.style.display = 'block';
      d.style.display = 'none';
      e.style.display = 'none';
      f.style.display = 'none';
      g.style.display = 'none';
      break;
    case 8:
      a.style.display = 'block';
      b.style.display = 'block';
      c.style.display = 'block';
      d.style.display = 'block';
      e.style.display = 'block';
      f.style.display = 'block';
      g.style.display = 'block';
      break;
    case 9:
      a.style.display = 'block';
      b.style.display = 'block';
      c.style.display = 'block';
      d.style.display = 'none';
      e.style.display = 'none';
      f.style.display = 'block';
      g.style.display = 'block';
      break;
    default:
      break;
  }
}