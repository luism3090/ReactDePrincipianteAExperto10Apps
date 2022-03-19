import React from 'react'
import styled from 'styled-components';
import { primerMayuscula } from './Helpers/HelpFormCotizador'

const ContResumenCotizacion = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

export const ResumenCotizacion = (props) => {

    const { marca, year, plan } = props.datosCotizacion.cotizacion;

    return (
    <ContResumenCotizacion>
        <h2>Resumen Cotizacion</h2>
        <ul>
            <li>Marca: {primerMayuscula(marca)}</li>
            <li>Plan: {primerMayuscula(plan)}</li>
            <li>Año del Auto: {year}</li>
        </ul>
    </ContResumenCotizacion>
    )
}
