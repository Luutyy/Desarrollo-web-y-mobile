import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import GameProvider from './context/GameContext'
import Play from './components/Play/Play'

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <div className="header">
          <h1>Fronteras</h1>
          <button><Link to="/home">Home</Link></button>
        </div>

        <GameProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/play" element={<Play />}></Route>
          </Routes>
        </GameProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
