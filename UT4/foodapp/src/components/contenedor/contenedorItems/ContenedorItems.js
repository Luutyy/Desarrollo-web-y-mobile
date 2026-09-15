import React from 'react'
import Item from '../item/Item';
import './contenedorItems.css'


export default function ContenedorItems({items}){
    return(
        <div className="contenedor">
            {
                items.map((item, indice) => {
                    return (
                        <Item key={indice} item={item}></Item>);
                })
            }
        </div>
    )
}