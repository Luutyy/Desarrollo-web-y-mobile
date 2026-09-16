import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Paises from "./components/Paises";
import Pais from "./components/Pais";
import './App.css';

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <div className="header">
          <ul>
            <li><Link to="/countries">Ver paises</Link></li>
          </ul>
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
