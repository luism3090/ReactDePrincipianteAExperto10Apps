import { useState } from "react";
import { FormClima } from "./components/FormClima";
import Header from "./components/Header";
import { MostrarClima } from "./components/MostrarClima";

function App() {

  const [busquedaClima, setBusquedaClima] = useState({
    ciudad:'',
    pais:''
  })

  const [resultadoBusqueda, setResultadoBusqueda] = useState({})

  return (
    <>
      <Header titulo="Clima React App"/>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <FormClima
                busquedaClima={busquedaClima}
                setBusquedaClima={setBusquedaClima}
                setResultadoBusqueda={setResultadoBusqueda}
              />
            </div>
            <div className="col m6 s12">
              <MostrarClima 
                resultadoBusqueda={resultadoBusqueda}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
