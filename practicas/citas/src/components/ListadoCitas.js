import React from 'react'

const ListadoCitas = ({cita, listadoCitas, setListadoCitas, eliminarCita2}) => {


  // otro ejemplo de como eliminar las citas

  // const eliminarCita1 = (id) =>{

  //   const citas = listadoCitas.filter((c)=> c.id !== id);

  //   setListadoCitas(citas)

  // }

  return (
    <div className='cita' style={{marginBottom:"5px"}}>
        
            <p>Mascota: <span>{cita.mascota}</span> </p>

            <p>Dueño: <span>{cita.mascota}</span> </p>

            <p>Fecha: <span>{cita.fecha}</span> </p>
        
            <p>Hora: <span>{cita.hora}</span> </p>
        
            <p>Síntomas: <span>{cita.sintomas}</span> </p>

          <button
            className='button eliminar u-full-width'
            //onClick={()=>eliminarCita1(cita.id)}
            onClick={()=>eliminarCita2(cita.id)}
          >
            Eliminar
          </button>

    </div>
  )
}

export default ListadoCitas