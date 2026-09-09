import React, {useState} from 'react'
import './item.css'


export default function Item({item}){
    let [stock, setStock] = useState(item.stock);
    return(
        <div className="item">
            <img className="imagen" src={item.imagen}></img>
            <p className="stock">{stock}</p>
            <button className="boton" onClick={agregarCompra}>⬆️</button>
            <button className="boton" onClick={sacarCompra}>⬇️</button>
        </div>
    )

    function agregarCompra(){
        if(stock === item.stock){
            return
        } else {
            setStock((stock) + 1);
        }
        //return (
          //  <ItemCarrito></ItemCarrito>
    //    ) 
    }
    function sacarCompra(){
        if(stock !== 0) {
            setStock((stock) - 1);
        }
         
    }
}