import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
    font-size: 18px;
    span{
        font-weight:bold;
    }
`

const Precio = styled.p`
    font-size:30px;
`

export const ResultadoCriptoCotizacion = ( {resultado} ) => {

  return (
    <>
        <Contenedor>

            <Precio> El precio es: <span>$ {resultado.PRICE}</span> </Precio>
            <Info> El precio más alto del día es: <span>$ {resultado.HIGHDAY}</span> </Info>
            <Info> El precio mas bajo del día es: <span>$ {resultado.LOWDAY}</span> </Info>
            <Info> Variación últimas 24 horas: <span>$ {resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info> Última actualización: <span>$ {resultado.LASTUPDATE}</span> </Info>
        </Contenedor>
    </>
  )
}
