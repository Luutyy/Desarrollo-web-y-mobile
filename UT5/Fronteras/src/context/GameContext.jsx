import { createContext, useContext, useState} from 'react';

export const GameContext = createContext();

export function GameProvider({ children }){
    const [vidas, setVidas] = useState(null);
    const [aciertos, setAciertos] = useState(0);
    const [dificultad, setDificultad] = useState(null);
    const [terminado, setTerminado] = useState(false)

    function iniciarPartida(dificultad){
        setDificultad(dificultad)
        switch(dificultad){
            case 'Facil':
                setVidas(5);
                break;
            case 'Media':
                setVidas(4);
                break;
            case 'Dificil':
                setVidas(3);
                break;
            default:
                throw new error("La dificultad no es valida") 
                break;
        }
        setAciertos(0)
        setTerminado(false);
    }

    return (
        <GameContext.Provider value= {{vidas, aciertos, dificultad, setVidas, setAciertos, iniciarPartida, terminado, setTerminado}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider