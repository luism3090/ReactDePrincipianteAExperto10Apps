import { useEffect, useState } from "react";
import FormCrearCita from "./components/FormCrearCita";
import ListadoCitas from "./components/ListadoCitas";

function App() {

  //const _CITAS = localStorage.setItem("citas",JSON.stringify(listadoCitas))
  
//                       undefined                                  no                       si
  const _CITAS = localStorage.getItem("citas") ? JSON.parse(localStorage.getItem("citas")) : []
//        []

  const [listadoCitas, setListadoCitas] = useState(_CITAS)
  //       []

  const listarCitas = (cita) => {

    setListadoCitas([
      ...listadoCitas,
      cita
    ]);

  }

  useEffect(() => {

/* 
  Agregar Cita
  1                   0  >= 0  =  SI
  2                   1  >= 0  =  SI
  3                   2  >= 0  =  SI
  4                   3  >= 0  =  SI
*/

/* 
  Eliminar           listadoCitas.length = 3

  1                   2  >= 0  =  SI
  2                   1  >= 0  =  SI
  3                   0  >= 0  =  SI
*/
    if(listadoCitas.length >= 0 )
    localStorage.setItem("citas",JSON.stringify(listadoCitas))

/* 
  Eliminar  -->   localStorage.citas = [{1},{2},{3}]

  1    localStorage.citas = [{1},{2}]
  2    localStorage.citas = [{1}]
  3    localStorage.citas = []
*/

/* 
  Agregar
  1     localStorage.citas = []
  2    localStorage.citas = [{1}]
  3    localStorage.citas = [{1},{2}]
  3    localStorage.citas = [{1},{2},{3}]
*/

  }, [listadoCitas])
  

  // ejemplo de como eliminar las citas

  const eliminarCita2 = (id) => {

    const newCitas = listadoCitas.filter(cita => cita.id !==id )

    setListadoCitas(newCitas);

  }

  return (
    <>

      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <FormCrearCita
              listarCitas={listarCitas}
            />
          </div>
          <div className="one-half column">
            
            {
              listadoCitas.length>0
              ?
              <h2>Listado de citas</h2>
              :
              <h2>No hay citas</h2> 
            } 

            {
              listadoCitas.map((cita)=> (
                <ListadoCitas
                  key={cita.id}
                  cita={cita}
                  listadoCitas={listadoCitas}
                  setListadoCitas={setListadoCitas}
                  eliminarCita2={eliminarCita2}
                />                 
              ))
              
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
