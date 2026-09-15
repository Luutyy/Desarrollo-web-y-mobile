import React, {useState} from 'react'
import './item.css'


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
<<<<<<< HEAD:UT4/foodapp/src/components/Item.js
        if (stock <= 0) return;
        setStock(stock - 1);
        onAgregar(item);
    }
    function sacarCompra(){
        if (stock >= item.stock) return; 
        setStock(stock + 1);
        onSacar(item);
=======
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
         
>>>>>>> 9758976a5270e608636094bb93482ab61e7baad5:UT4/foodapp/src/components/contenedor/item/Item.js
    }
}