import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  // State para guardar la cita de la mascota
  const [stCita, setCita] = useState({
    mascota: "",
    dueno: "",
    fecha: new Date().toISOString().slice(0, 10),
    hora: new Date().toISOString().slice(11, -5),
    sintomas: "",
  });

  const [stErrorValidaCita, setErrorValidaCita] = useState(false);

  // almacenando los valores de la cita en el State

  const almacenarCita = (e) => {
    setCita({
      ...stCita,
      [e.target.name]: e.target.value,
    });
  };

  const enviarCita = (e) => {
    e.preventDefault();

    // validar Cita

    if (
      mascota.trim() === "" ||
      dueno.trim() === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas.trim() === ""
    ) {
      setErrorValidaCita(true);
      return;
    }

    setErrorValidaCita(false);

    // Asignar un id

    stCita.id = uuidv4();

    // Crear la cita

    crearCita(stCita);

    // Resetear form

    setCita({
      mascota: "",
      dueno: "",
      fecha: new Date().toISOString().slice(0, 10),
      hora: new Date().toISOString().slice(11, -5),
      sintomas: "",
    });
  };

  const { mascota, dueno, fecha, hora, sintomas } = stCita;

  return (
    <>
      <h2>Crear Citas</h2>
      <form onSubmit={enviarCita}>
        {stErrorValidaCita ? (
          <p className="alerta-error">Todos los campos son obligatorios</p>
        ) : null}
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          type="text"
          id="mascota"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={almacenarCita}
          value={mascota}
        />
        <label htmlFor="dueno">Nombre Dueño</label>
        <input
          type="text"
          id="dueno"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre dueño de la Mascota"
          onChange={almacenarCita}
          value={dueno}
        />
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          className="u-full-width"
          id="fecha"
          name="fecha"
          placeholder=""
          onChange={almacenarCita}
          value={fecha}
        />
        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          className="u-full-width"
          id="hora"
          name="hora"
          placeholder=""
          onChange={almacenarCita}
          value={hora}
        />
        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          name="sintomas"
          id="sintomas"
          cols="30"
          rows="10"
          placeholder="Escribe los síntomas"
          onChange={almacenarCita}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
