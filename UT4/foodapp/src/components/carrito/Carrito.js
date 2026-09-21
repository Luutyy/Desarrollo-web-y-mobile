import React from 'react';
import './carrito.css'
import ItemCarrito from './ItemCarrito.js';

export default function Carrito({items, eliminar}){
    const total = items.reduce((acc,item)=> acc + Number(item.precio) * item.cantidad, 0)
    
    return (
        <div className="carrito">
            <h2>Cuenta</h2>
            {items.length === 0 ? 
            (<p>El carrito esta vacio</p>)
            :
            (items.map(item => (
                <ItemCarrito key={item.nombre} item={item} eliminar={eliminar}/>
            ))
            )}

            
            <h2>Total:{total}</h2>
        </div>
    )
}