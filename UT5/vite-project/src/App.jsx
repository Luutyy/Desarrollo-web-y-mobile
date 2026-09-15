import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Paises from "./components/Paises";
import Pais from "./components/Pais";
import './App.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to="/countries">Ver paises</Link></li>
          <li><Link to="/countries/URY">Ver Uruguay</Link></li>
        </ul>

        <Routes>
          <Route path="/countries" element={ <Paises></Paises> }/>
          <Route path="/countries/:cca" element={ <Pais></Pais> }/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )

}

export default App
