import React, {useState} from 'react';

export const PrimerComponente = () => {

    let apellido = "Ramirez";

    const [nombre, setNombre] = useState("Lautaro")

    let materias = [
        "Bases de datos 1",
        "Desarrollo web y mobile",
        "Etica profesional",
        "Redes"
    ]

    const cambiarNombre = (nuevoNombre) => {
       setNombre(nuevoNombre)
    }

    return (
        <div> 
            <h1>Primer componente</h1>
            <p>Texto del primer componente</p>
            <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}> {nombre}</strong></p>
            <p>Mi apellido es: {apellido}</p>   

            <input type="text" onChange = {e => cambiarNombre(e.target.value)} placeholder='Escribe el nuevo nombre'></input>

            <button onClick={e => cambiarNombre("Federico")}>Cambiar nombre</button>

            <ul>
                {
                    materias.map((materia, indice) => {
                        return(<li key={indice}>
                        {materia}
                    </li>)
                    } 
                )
                }
            </ul>
        </div>
    )
}