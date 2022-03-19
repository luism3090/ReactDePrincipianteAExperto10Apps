import React, { useState } from 'react'
import styled from 'styled-components'
import {validarCotizacion, obtenerDiferenciaYear, cacularMarca, obtenerPlan,
} from './Helpers/HelpFormCotizador'

const Div = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838f;
    font-size:16px;
    width:100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    border:none;
    margin-top:2rem;
    transition: background-color .3s ease;

    &:hover{
        background-color: #26c6da;
        cursor: pointer;
    }
`;


const DivError = styled.div`

    background-color:red;
    color:white;
    padding: 1rem;
    width: 100%;
    text-align:center;
    margin-bottom: 2rem;

`;

export const FormCotizador = (props) => {

    const { setDatosCotizacion, setMostrarSpinner } = props;

    const [cotizacion, setCotizacion] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const {marca, year, plan} = cotizacion;

    const [validaCotizacion, setValidaCotizacion] = useState({
        errorCotizacion:false,
        msjErrorCotizacion:''
    })

    const {errorCotizacion, msjErrorCotizacion} = validaCotizacion;

    const changeCotizacion = (e) => {

        setCotizacion({
            ...cotizacion,
            [e.target.name]:e.target.value
        })

    }

    const submitCotizacion = (e) => {

        e.preventDefault();

        const estadoValidacion = validarCotizacion(marca, year, plan);

        setValidaCotizacion(estadoValidacion)
        
        if(estadoValidacion.errorCotizacion)
        return

        setMostrarSpinner(true);
        setDatosCotizacion("")

        setTimeout( () => {
        
        let resultado = 2000;

        const diferencia = obtenerDiferenciaYear(year)

        resultado -= (( diferencia * 3) * resultado ) / 100;

        resultado = cacularMarca(marca) * resultado;

        let incrementoPlan = obtenerPlan(plan);

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        setDatosCotizacion({
            resultado,
            cotizacion
        })

        setMostrarSpinner(false);
        
    }, 1000);

        
    }


  return (
    <>
        <form onSubmit={submitCotizacion}>
            { errorCotizacion ? <DivError >{msjErrorCotizacion}</DivError> : ''}
            <Div>
                <Label htmlFor='marca'>Marca:</Label>
                <Select name="marca" id="marca" value={marca} onChange={changeCotizacion} >
                    <option value="">--- Seleccione---</option>
                    <option value='americano'>Americano</option>
                    <option value='europeo'>Europeo</option>
                    <option value='asiatico'>Asiático</option>
                </Select>
            </Div>
            <Div>
                <Label htmlFor='year'>Año:</Label>
                <Select name="year" id="year" value={year} onChange={changeCotizacion}>
                    <option value="">-- Seleccione --</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Div>
            <Div>
                <Label>Plan:</Label>
                <InputRadio
                    type="radio"
                    name='plan'
                    value="basico"
                    checked={plan === "basico"}
                    onChange={changeCotizacion}
                />Básico
                <InputRadio
                    type="radio"
                    name='plan'
                    value="completo"
                    checked={plan === "completo"}
                    onChange={changeCotizacion}
                />Completo
            </Div>
            <Boton type="submit"> 
                Cotizar
            </Boton>
        </form>
    </>
  )
}
