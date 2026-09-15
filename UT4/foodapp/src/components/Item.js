import React, {useState} from 'react'



export default function Item({item}){
    let [stock, setStock] = useState(item.stock);
    return(
        <div className="item">
            <img className="imagen" src={item.imagen}></img>
            <p className="stock">{stock}</p>
            <button className="boton" onClick={agregarCompra} disabled={stock <= 0}>⬆️</button>
            <button className="boton" onClick={sacarCompra}>⬇️</button>
        </div>
    )

    function agregarCompra(){
        if (stock <= 0) return;
        setStock(stock - 1);
        onAgregar(item);
    }
    function sacarCompra(){
        if (stock >= item.stock) return; 
        setStock(stock + 1);
        onSacar(item);
    }
}