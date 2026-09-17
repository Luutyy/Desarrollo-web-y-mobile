import React, {useState} from 'react'
import './item.css'


export default function Item({item}){
    let [stock, setStock] = useState(item.stock);
    return(
        <div className="item">
            <img className="imagen" src={item.imagen}></img>
            <div className="botonesStock">
                <button className="boton arriba" onClick={agregarCompra} disabled={stock <= 0}>⬆️</button>
                <button className="boton abajo" onClick={sacarCompra}>⬇️</button>
                <p className="stock">{stock}</p>
            </div>
        </div>
    )

    function agregarCompra(){
        if (stock <= 0) return;
        setStock(stock - 1);
    //    onAgregar(item);
    }
    function sacarCompra(){
        if (stock >= item.stock) return; 
        setStock(stock + 1);
      //  onSacar(item);
    }
}