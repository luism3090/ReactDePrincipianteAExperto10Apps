import React, { useState } from 'react'
    // setImagenes, setTotalPages,
const FormImagenes = ( { setBusqueda, setCurrentPage } ) => {

  const [buscar, setBuscar] = useState('');

  const [validaBusqueda, setValidaBusqueda] = useState(false)

  const submitBusqueda = (e) => {

    e.preventDefault();

    if(buscar.trim() === ""){
      setValidaBusqueda(true)
      return
    }

    setValidaBusqueda(false);

    setBusqueda(buscar);
    setCurrentPage(1)

  }

  return (
    <form onSubmit={submitBusqueda}>
        <div className='row'>
            <div className='form-group col-md-8'>

              <input
                type="text"
                className='form-control form-control-lg'
                placeholder='Busca una imagen, ejemplo futbol o café'
                value={buscar}
                onChange={(e)=> setBuscar(e.target.value)}
              />
            </div>
            <div className='form-group col-md-4'>
                <button
                  type="submit"
                  className='btn btn-lg btn-danger btn-block'
                  placeholder='Busca una imagen, ejemplo futbol o café'
                >
                  Buscar
                </button>
            </div>

        </div>

        {validaBusqueda ? <p className='my-3 p-4 text-center alert alert-primary'>La busqueda es obligatorio</p> : ''}

    </form>
  )
}

export default FormImagenes