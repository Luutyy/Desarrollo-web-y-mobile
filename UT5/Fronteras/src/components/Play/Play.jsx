import { useEffect, useContext, useState } from "react"
import { GameContext } from "../../context/GameContext";
import Result from '../Result/Result'
import './Play.css'

function Play(){
    const { vidas, dificultad, setVidas, aciertos, setAciertos, setTerminado, terminado } = useContext(GameContext);
    const [paises, setPaises] = useState(null);
    const [paisActual, setPaisActual] = useState(null);
    const [paisCorrecto, setPaisCorrecto] = useState(null);
    const [opciones, setOpciones] = useState([]);

    useEffect(() => {
        fetch('https://countries.dev/countries')
        .then(response => response.json())
        .then(data => {
            setPaises(data);
            elegirNuevoPais(data);
        })
    }, [])

    function elegirNuevoPais(listaPaises){
        const conFronteras = listaPaises.filter(p => p.borders && p.borders.length > 0);
        const pais = conFronteras[Math.floor(Math.random() * conFronteras.length)];

        const codigoCorrecto = pais.borders[Math.floor(Math.random() * pais.borders.length)]
        const paisCorrecto = listaPaises.find(p => p.alpha3Code === codigoCorrecto);

        const falsos = listaPaises
            .filter(p => p.alpha3Code !== codigoCorrecto && !pais.borders.includes(p.alpha3Code))
            .sort(() => Math.random() - 0.5) // Sort hace a - b y segun eso posiciona, por ende al hacer Math.random - 0.5 se ordenara aleatorio
            .slice(0,2);

        setPaisActual(pais);
        setPaisCorrecto(paisCorrecto);
        setOpciones([paisCorrecto, ...falsos].sort(() => Math.random() - 0.5));
    }

    function manejarRespuesta(opcion){
        if(opcion.alpha3Code === paisCorrecto.alpha3Code){
            setAciertos(aciertos + 1);
        } else {
            setVidas(vidas - 1);
        }
        elegirNuevoPais(paises); 
    }

    useEffect(() => {
        if (vidas !== null && (vidas <= 0 || aciertos >= 20)) {
            setTerminado(true);
        }
    }, [vidas, aciertos]);
    
    if(terminado){
        return (<Result/>)
    }

    if (!paisActual) {
        return <p>Cargando...</p>;
    }

    return(
        <div>
            <p>Dificultad: {dificultad}</p>
            <p>Vidas: {vidas} </p>
            <p>Aciertos: {aciertos}</p>
            <h2>{paisActual.name}</h2>
            <img src={paisActual.flags.svg} alt="as" width="100"/>

            <p>Cual de estos paises es frontera?</p>
            <div className="divOpciones">
                {opciones.map(opcion => (
                    <button className="boton" key={opcion.alpha3Code} onClick={() => manejarRespuesta(opcion)}>
                        <img src={opcion.flags.svg} width="40"/>
                        <p>{opcion.name}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Play