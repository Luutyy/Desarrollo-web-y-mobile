import {React, useContext} from 'react'
import {GameContext} from '../../context/GameContext'
import { Link } from "react-router-dom";
import Play from '../Play/Play'

function Home(){
    const {iniciarPartida} = useContext(GameContext)

    return(
        <div>
            <h2>Elige la dificultad</h2>
            <ul>
                <li><Link to="/play" onClick={() => iniciarPartida("Facil")}>Facil → 5 vidas</Link></li>
                <li><Link to="/play" onClick={() => iniciarPartida("Media")}>Media → 4 vidas</Link></li>
                <li><Link to="/play" onClick={() => iniciarPartida("Dificil")}>Dificil → 3 vidas</Link></li>
            </ul>
        </div>
    );
}

export default Home