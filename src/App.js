import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Populares from "./components/Populares"
import Main from "./components/Main"
import UltimosLanzamientos from "./components/UltimosLanzamientos"
// funciones que nos permiten acceder a tres funconalidades: 
// declarar variables
// cambiar esas variables
// generar un render del componente cuando esas variables cambien


// primera regla: no se pueden llamar adentro de if, condicionales, for, switch, funciones. 
// segunda regla: solo se pueden llamar en un componente o en otro hook 
// tercera regla: su nombre debe comenzar con use 

// custom hooks

// una logica compartida por muchos componentes que requiere un estado 
// NO INCLUYE HTML (jsx) --> eso se resuelve con componentes

function App() {
   const [persona, setPersona] = useState("")


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/populares" element={<Populares />} />
            <Route path="/ultimas" element={<UltimosLanzamientos />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
