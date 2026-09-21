import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Paises from "./components/Paises";
import Pais from "./components/Pais";
import './App.css';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {modoOscuro, cambiarTema} = useContext(ThemeContext);

  return (
      <div className={modoOscuro ? "app oscuro" : "app"}>

        <BrowserRouter>
          <div className="header">
            <ul>
              <li><Link to="/countries">Ver paises</Link></li>
            </ul>

            <button className={modoOscuro ? "boton" : "boton oscuro"} onClick={cambiarTema}>
              {modoOscuro ? "Modo claro" : "Modo oscuro"}
            </button>
          </div>

          <div className = "contenido">
            <Routes>
              <Route path="/countries" element={ <Paises></Paises> }/>
              <Route path="/countries/:alpha2Code" element={ <Pais></Pais> }/>
            </Routes>
          </div>
          </BrowserRouter>
      </div>
    
  )

}

export default App
