//Hooks
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";

//Context
import { ContextCar } from "./components/context/car";

//Files
import Form from "./components/form_cars/form";
import Editar from "./components/modal/modalEditar";

//Style
import { Main } from "./StyleApp";
import "./index.css";

export default function App() {

  const [ brand, setBrand ] = useState('');
  const [ model, setModel ] = useState('');
  const [ data, setData ] = useState([]);
  const [ load, setLoad ] = useState(true);
  const [ call, setCall ] = useState(false);

  //Requisição para buscar os dados
  useEffect(() => {
      Axios.get("http://localhost:8080/car")
      .then(results => setData(results.data));
      setLoad(false);
  }, [call]);
  
  return (
    <ContextCar.Provider value={{
      brand: brand,
      setBrand: setBrand,
      model: model,
      setModel: setModel,
      data: data,
      load: load,
      setCall: setCall,
      call: call
    }}>

      <Main>

          <Router>
            <Routes>
              <Route path="/" element={ <Form /> } />
              <Route path="/editar/:id/:brand/:model" element={ <Editar /> } />
            </Routes>
          </Router>

      </Main>

    </ContextCar.Provider>
  );
}