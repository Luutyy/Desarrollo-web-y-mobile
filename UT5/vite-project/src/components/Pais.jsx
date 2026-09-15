import { data, useParams } from "react-router-dom";
import React, { useState} from 'react'


function Pais() {
    const { cca } = useParams();

    const [pais, setPais] = useState([])
    
    
    useEffect(x => {
        fetch(`https://countries.dev/countries/alpha/${cca}`)
        .then((response) => response.json())
        .then((data) => {
            setPais(data);
      });
    }, []);
    
    return (
        <div>
            <div>
                <img ></img>
            </div>
            <div>
                <h1>pais.</h1>
            </div>
        </div>
    );
}

export default Pais;