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

const useCriptomoneda = ( label, stateInicial, opciones) => {

    const [criptoMoneda, setCriptoMoneda] = useState(stateInicial);

    const SelectCriptomoneda = ()=> {

        return (
            <>
                <Label htmlFor="criptomoneda">{label}</Label>
                <Select id="criptomoneda" 
                        value={criptoMoneda}
                        onChange={e => setCriptoMoneda(e.target.value)}
                >
                    <option value="">- Seleccione -</option>
                    {opciones.map((opcion)=>{

                        return <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>

                    })}
                    
                </Select>
                
            </>
        )

    }

    return [criptoMoneda, SelectCriptomoneda];

}

export default useCriptomoneda