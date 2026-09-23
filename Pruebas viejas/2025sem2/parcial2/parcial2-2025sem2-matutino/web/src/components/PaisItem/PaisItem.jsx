import React from 'react'
import './PaisItem.css'
import { Link } from "react-router-dom";

export default function PaisItem({pais}){
    return(
        <div className="pais">
            <Link to={`/country/${pais.cca3}`}>
                <img src={pais.flag.svg} alt={pais.flag.alt}/>
                <p>{pais.name.common}</p>
            </Link>
        </div>
    )
}