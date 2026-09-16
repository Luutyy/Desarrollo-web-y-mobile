import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function Paises(){
    const [paises, setPaises] = useState([]);
    const [regiones, setRegiones] = useState([])

    useEffect(x => {
        fetch("https://countries.dev/countries")
        .then((response) => response.json())
        .then((data) => {
            setPaises(data);
      });
    }, []);

    function manejarRegion(evento){
        const region = evento.target.value; // Me fijo a que region pertenece el checkbox

        if(evento.target.checked){
            setRegiones([...regiones,region]); // Agrego la region al array de regiones
        } else {
            setRegiones(regiones.filter((r) => r !== region)); // Saco la region
        }
    }

    return(
        <div className="paises">
            <div className="checkboxes">
                <div>
                    <input type="checkbox" value="Americas" onChange={manejarRegion}/> America
                </div>

                <div>
                    <input value="Asia" type="checkbox" onChange={manejarRegion}/> Asia
                </div>

                <div>
                    <input value="Polar" type="checkbox" onChange={manejarRegion}/> Polar
                </div>

                <div>
                    <input value="Europe" type="checkbox" onChange={manejarRegion}/> Europa
                </div>

                <div>
                    <input value="Oceania" type="checkbox" onChange={manejarRegion}/> Oceania
                </div>
            </div>
            <div className="regiones">
            {regiones.map((region) => {
                return (
                    <div key={region} className="region">
                        <h2>{region}</h2>
                    
                    {paises.filter((pais) => pais.region === region)
                    .map((pais) => {
                        return(
                            <div key={pais.alpha2Code} className = "pais">
                                <Link to={`/countries/${pais.alpha2Code}`}><p>{pais.alpha2Code}: {pais.name}</p></Link>
                                <Link to={`/countries/${pais.alpha2Code}`}><img src={pais.flags.svg} width="100"></img></Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    })}
    </div>
        </div>
);
}

export default Paises;