import React, {useState} from 'react'
import './item.css'


export default function Item({item, onAgregar, onSacar}){
    const stock = item.stockDisponible;

    return(
        <div className="item">
            <img className={stock === 0 ? "imagen agotado" : "imagen"} src={item.imagen}></img>
            {stock === 0 ? (
                <p className="agotado">No stock</p>
            ):("")}
            <div className="botonesStock">
                <button className="boton arriba" onClick={() => onAgregar(item)} disabled={stock <= 0}>⬆️</button>
                <button className="boton abajo" onClick={() => onSacar(item)}>⬇️</button>
                <p className={stock === 0 ? "stock agotado" : "stock"}>{stock}</p>
            </div>
        </div>
    )
}