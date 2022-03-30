import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: 10px;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

export const useMoneda = (labelMoneda, stateInicial, monedas) => {

    const [moneda, setMoneda] = useState(stateInicial)

    const SelectMoneda = () => (
        <>
            <Label htmlFor='moneda'>{labelMoneda}</Label>
            <Select id="moneda" 
                    onChange={(e)=> setMoneda(e.target.value)}
                    value={moneda}
            >
                <option disabled value="">- Seleccione -</option>
                {monedas.map( moneda => (
                    <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
                ))}
            </Select>
        </>   
    )

  return [moneda, SelectMoneda, setMoneda];

}


