import productos from './db.json' with { type: 'json' };

// Creamos una copia de los datos para trabajar con ellos
let db = { ...productos };

const lista = document.getElementById("products");


function renderizarObjetos(){
    lista.innerHTML = "";
    for(let producto of db.products) {
        let li = document.createElement("li");
        li.textContent = `${producto.title} $${producto.price}. Cantidad: ${producto.stock}. Categoria: ${producto.category}`
        lista.appendChild(li);    
    }
}

function agregarProducto(){
        const titulo = document.getElementById("title").value.trim();
        const precio = document.getElementById("price").value;
        const stock = document.getElementById("stock").value;
        const categoria = document.getElementById("category").value.trim();
        
        if(!titulo || isNaN(precio) || isNaN(stock) || !categoria){
            return;
        }

        const nuevoId = db.products.length + 1;

        db.products.push({
            id: nuevoId,
            title: titulo,
            price: precio,
            stock: stock,
            category: categoria
        })
        
        renderizarObjetos();

        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";
        document.getElementById("category").value = "";
}

const boton = document.querySelector("button");
boton.addEventListener("click", agregarProducto);

renderizarObjetos();
