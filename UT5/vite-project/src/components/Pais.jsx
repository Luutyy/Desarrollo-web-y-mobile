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
            <div>
                <img src={pais.flags.svg}></img>
            </div>
            <div>
                <h1>{pais.name}</h1>
            </div>
        </div>
    );
}

export default Pais;