import { useEffect, useState } from "react";
import FormGastos from "./components/FormGastos";
import FormPresupuesto from "./components/FormPresupuesto";
import { ListarGastos } from "./components/ListarGastos";

function App() {

  const [presupuesto, setPresupuesto] = useState('')

  const [mostrarGastos, setMostrarGastos] = useState(true)

  const [presupuestoRestante, setPresupuestoRestante] = useState('');

  const [gastos, setGastos] = useState([]);

useEffect(() => {

  if(gastos.length>0){

    let totalGastos = 0;

      gastos.forEach(gasto => {
          totalGastos = totalGastos + parseInt(gasto.CantidadGasto);
      });

      setPresupuestoRestante(parseInt(presupuesto)-parseInt(totalGastos))

  }

}, [gastos,presupuesto])



  const agregarGastos = (gasto) => {

    setGastos([
      ...gastos,
      gasto
    ])

  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
      {mostrarGastos ? 
      
        <FormPresupuesto
          setPresupuesto={setPresupuesto}
          presupuesto={presupuesto}
          setMostrarGastos={setMostrarGastos}
          setPresupuestoRestante={setPresupuestoRestante}
        /> 

      : 
        
          <div className="row">
            <div className="one-half column">
              <FormGastos
                agregarGastos={agregarGastos}
                presupuestoRestante={presupuestoRestante}
              />
            </div>
            <div className="one-half column">
            
              <ListarGastos 
                gastos={gastos}
                presupuesto={presupuesto}
                presupuestoRestante={presupuestoRestante}
              />
              
            </div>
          </div>
        
      }

      </div>
    </div>
  );
}

export default App;
