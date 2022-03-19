import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const FormCrearCita = (props) => {

  const { listarCitas } = props;

  const [cita, setCrearCita] = useState({
    mascota:'',
    propietario:'',
    fecha:new Date().toISOString().slice(0,10),
    hora:new Date().toISOString().slice(11,-5),
    sintomas:''
  })

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const [errorValidaCita, setErrorValidaCita] = useState(false);


  const changeCrearCita = (e) => {

    setCrearCita({
      ...cita,
      [e.target.name]:e.target.value
    })

  }


  const submitCrearCita = (e) => {

    e.preventDefault();

    if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){

      setErrorValidaCita(true);

      return;

    }

    setErrorValidaCita(false);

    cita.id = uuidv4();

    listarCitas(cita);

    setCrearCita({
      mascota:'',
      propietario:'',
      fecha:new Date().toISOString().slice(0,10),
      hora:new Date().toISOString().slice(11,-5),
      sintomas:''
    })


  }

  return (
    <>

      <h1>Crear Cita</h1>

      { errorValidaCita ? <p className='alerta-error'> Todos los campos son obligatorios</p> : null}

      <form onSubmit={submitCrearCita}>

          <label htmlFor='mascota'>Nombre Mascota</label>
          <input
              type="text"
              id='mascota'
              name='mascota'
              maxLength="60"
              placeholder="Nombre de la mascota"
              className="u-full-width"
              onChange={changeCrearCita}
              value={mascota}
          />

          <label htmlFor='propietario'>Nombre Dueño</label>
          <input
              type="text"
              id='propietario'
              name='propietario'
              maxLength="100"
              placeholder="Nombre del Dueño"
              className="u-full-width"
              onChange={changeCrearCita}
              value={propietario}
          />

          <label htmlFor='fecha'>Fecha</label>
          <input
              type="date"
              id='fecha'
              name='fecha'
              className="u-full-width"
              onChange={changeCrearCita}
              value={fecha}
          />

          <label htmlFor='hora'>Hora</label>
          <input
              type="time"
              id='hora'
              name='hora'
              className="u-full-width"
              onChange={changeCrearCita}
              value={hora}
          />

          <label htmlFor='sintomas'>Síntomas</label>
          <textarea
              id='sintomas'
              name='sintomas'
              className="u-full-width"
              placeholder='Síntomas'
              onChange={changeCrearCita}
              value={sintomas}
          >
          </textarea>

          <button
            type='submit'
            maxLength="300"
            className='u-full-width button-primary'
          >
            Crear Cita
          </button>

      </form>

    </>
  )
}

export default FormCrearCita