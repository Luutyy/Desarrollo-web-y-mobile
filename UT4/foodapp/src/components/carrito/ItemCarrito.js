import React from 'react';
import './itemCarrito.css'

export default function ItemCarrito({item, eliminar}){
    return (
        <div className="itemCarrito">
            <div className="inicio">
                <img className="imagenLista" src={item.imagen}/>
                <p className="cantidad">x {item.cantidad}</p>
            </div>
            <div className="final">
                <p className="precio">${item.precio}</p>
                <button className="sacar" onClick={() => eliminar(item)}>X</button>
            </div>
        </div>
    )
}