import { useEffect, useContext, useState } from "react"
import { GameContext } from "../../context/GameContext";

function Play(){
    const { vidas, aciertos } = useContext(GameContext);

    return(
        <div>
            {vidas > 0 ? <p>Ganaste!</p> : <p>Perdiste...</p>}
            <p>Cantidad de aciertos: {aciertos}</p>
            <p>{vidas > 0 ? <p>Vidas restantes: {vidas}</p> : <p>Intentalo de nuevo!!</p>}</p>
        </div>
    )

}

export default Play