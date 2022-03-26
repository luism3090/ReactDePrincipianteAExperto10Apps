import React from 'react'
import { InfoClima } from './InfoClima';

export const MostrarClima = (props) => {

    const { resultadoBusqueda } = props

    let mensajeBusquedaClima;

    if(Object.keys(resultadoBusqueda).length===0){
        mensajeBusquedaClima = <InfoClima mensaje="Escriba la ciudad y seleccione el país" />
    }
    else if(resultadoBusqueda.cod === "404"){
        mensajeBusquedaClima = <InfoClima mensaje="No hay resultados" />
    }
    else{
        mensajeBusquedaClima = <InfoClima mensaje='' resultadoBusqueda={resultadoBusqueda}/>
    }

    

  return (
    <>
        <div className='card-panel white col s12'>
            <div className='black-text'>
            
                {mensajeBusquedaClima}
            
            </div>
        </div>
    </>
  )
}
