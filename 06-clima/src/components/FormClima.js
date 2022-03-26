import React, { useState } from 'react'
import { validarBusquedaClima, consultarApi } from './helpers'

export const FormClima = ({ busquedaClima, setBusquedaClima, setResultadoBusqueda}) => {

    const { ciudad, pais } = busquedaClima;

    const [validaBusquedaClima, setValidaBusquedaClima] = useState({
        msjErrorValidaClima:'',
        errorValidaClima:''
    })

    const { msjErrorValidaClima, errorValidaClima } = validaBusquedaClima;
    

    const changeClima = (e) => {
        
        setBusquedaClima({
            ...busquedaClima,
            [e.target.name]: e.target.value
        })

    }

    const submitBusquedaClima = async (e) => {

        e.preventDefault();

        const result = validarBusquedaClima(ciudad,pais)

        setValidaBusquedaClima(result);

        if(result.errorValidaClima)
            return;
        
        const resultado = await consultarApi(ciudad,pais);

        setResultadoBusqueda(resultado)
        
    }

  return (

    <>

        { errorValidaClima ? <div className='red darken-4 error'>{msjErrorValidaClima} </div> : '' } 
    
        <form onSubmit={submitBusquedaClima}>

            <div className='input-field col s12'>
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={changeClima}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select 
                        onChange={changeClima} 
                        name="pais" 
                        id="pais"
                        value={pais}
                        >
                    <option value="" disabled>-- Seleccione --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>Pais: </label>
            </div>

            <div className='input-field col s12'>
                <button
                    type="submit"
                    className='waves-effect waves-light btn-large btn-block yellow accent-4 col s12'
                    style={{color:"black"}}
                >
                Buscar
                </button>
                
            </div>
                
        </form>

    </>
    
  )
}
