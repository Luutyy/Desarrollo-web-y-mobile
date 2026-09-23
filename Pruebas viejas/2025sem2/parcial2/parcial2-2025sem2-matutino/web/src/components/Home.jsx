import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import PaisItem from './PaisItem/PaisItem'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [paises, setPaises] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();



  
  useEffect(() => {
      async function cargarPaises() {
        const response = await fetch(`/api/countries?${searchParams}`);

        if (!response.ok) {
          return;
        }

        const codigos = await response.json();

        const respuestas = await Promise.all(
          codigos.map((codigo) =>
            fetch(`/api/countries/${codigo}`)
              .then(response => response.json())
          )
        );

        setPaises(respuestas);
      }

      cargarPaises();
    }, [searchParams]);



  function handleFilter(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    const params = new URLSearchParams(searchParams);
    if(valor === ""){
      params.delete(nombre)
    } else {
      params.set(nombre, valor);
    }

    setSearchParams(params);
  }

  return (
    <div>
      <Navbar handleFilter={handleFilter}/>
        <div className="contenedorPaises">
          {paises.map((pais) => (
            <PaisItem key={pais.cca3} pais={pais}/>
          ))}
      </div>
    </div>
  );
}

