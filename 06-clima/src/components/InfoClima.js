import React from 'react'

export const InfoClima = (props) => {

    const {mensaje , resultadoBusqueda} = props;

    if(mensaje){
        return <h2> {mensaje} </h2>
    }

    const { name , main } = resultadoBusqueda

    const kelvin = 273.15;

  return (
    <>
        <h2> El clima en {name} es: </h2>
        <p className='temperatura'>
        {  parseFloat(main.temp - kelvin, 10 ).toFixed(2) } <span>&#x2103;</span>
        </p>
        <p> Temperatura máxima: &nbsp;
            {  parseFloat(main.temp_max - kelvin, 10 ).toFixed(2) } <span>&#x2103;</span>
        </p>
        <p> Temperatura mínima: &nbsp;
            { parseFloat(main.temp_min - kelvin, 10 ).toFixed(2) } <span>&#x2103;</span>
        </p>
    </>
  )
}
