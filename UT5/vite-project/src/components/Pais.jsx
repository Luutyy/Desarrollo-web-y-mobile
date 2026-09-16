import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";


function Pais() {
    const { alpha2Code } = useParams();

    const [pais, setPais] = useState(null)
    
    
    useEffect(() => {
        fetch(`https://countries.dev/countries/alpha/${alpha2Code}`)
        .then((response) => response.json())
        .then((data) => {
            setPais(data);
      });
    }, [alpha2Code]);
    
    if (!pais) return <p>Cargando...</p>;

    return (
        <div>
            <div className="paisBandera">
                <img width="100" src={pais.flags.svg}></img>
            </div>
            <div>
                <h1>{pais.name}</h1>
                <p>Capital: {pais.capital}</p>
                <p>Region: {pais.region}</p>
                <p>Densidad poblacional: {pais.populationDensity} h/km2</p>
                <p>Latitud/longitud: {pais.latlng.join(" / ")}</p>
            </div>
        </div>
    );
}

export default Pais;