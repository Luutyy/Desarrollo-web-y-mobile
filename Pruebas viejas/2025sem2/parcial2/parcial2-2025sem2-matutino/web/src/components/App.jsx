import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ApiRef from './ApiRef';
import Pais from './Pais/Pais'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ref/api" element={<ApiRef />} />
        <Route path="/country/:code" element={<Pais/>}/>
      </Routes>
    </BrowserRouter>
  );
}
