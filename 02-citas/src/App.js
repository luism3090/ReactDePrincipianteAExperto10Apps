import React, { useEffect, useState } from "react";
import CrearCita from "./components/CrearCita";
import Formulario from "./components/Formulario";

function App() {
  const citas = localStorage.getItem("citas")
    ? JSON.parse(localStorage.getItem("citas"))
    : [];

  const [stCitasGuardadas, setCitasGuardadas] = useState(citas);

  useEffect(() => {
    if (stCitasGuardadas.length >= 0) {
      localStorage.setItem("citas", JSON.stringify(stCitasGuardadas));
    }
  }, [stCitasGuardadas]);

  const crearCita = (citas) => {
    setCitasGuardadas([...stCitasGuardadas, citas]);
  };

  const eliminarCita = (id) => {
    const newCitas = stCitasGuardadas.filter((cita) => cita.id !== id);
    setCitasGuardadas(newCitas);
  };

  return (
    <>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {stCitasGuardadas.length === 0 ? (
              <h2>No hay citas</h2>
            ) : (
              <h2>Administra tus citas</h2>
            )}
            {stCitasGuardadas.map((cita) => (
              <CrearCita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
