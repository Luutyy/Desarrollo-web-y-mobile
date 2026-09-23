import { useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import './Pais.css'


export default function Pais(){
    const [pais, setPais] = useState()
    const {code} = useParams()
    
    useEffect(() => {
        fetch(`/api/countries/${code}`)
        .then(response => response.json())
        .then(data => {
            setPais(data)
        })
    }, [code])


    if (!pais) {
        return <p>Cargando...</p>;
    }

    const currencies = Object.values(pais.currencies || {});
    const languages = Object.values(pais.languages || {});
    
    return(
        <div className="contenedor">
            <h1>{pais.name.common}</h1>

            <div className="div1">
                <img src={pais.flag.svg}></img>
                <div>
                    <p>
                      {pais.name.nativeName?.spa?.official ||
                        Object.values(pais.name.nativeName || {})[0]?.official}
                    </p>
                    <p>{pais.name.official}</p>
                </div>
            </div>

            <div className="div2">
                <img src={pais.map.svg}/>
                <div>
                    <p>Capital: {pais.capital?.join(",")}</p>
                    <p>Currency: {currencies.map(currency => currency.name).join(', ')}</p>
                    <p>Language: {languages.join(",")}</p>
                    <p>Time zones: {pais.timezones?.join(",")}</p>
                </div>
            </div>
            
            <Link to="/"><button>Back to list</button></Link>
        </div>
    )
}