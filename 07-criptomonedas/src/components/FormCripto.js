import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMoneda } from '../hooks/useMoneda'
import useCriptomoneda  from '../hooks/useCriptomoneda'
import axios from 'axios'
import { ErrorValidacion } from './ErrorValidacion'
import  { validaCriptomonedas, resultadoApiCriptoCotizacion }  from '.././helpers/helpFormCripto'

const Boton = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }

`

export const FormCripto = ( { setCriptoCotizacion, setLoadingSpinner }) => {

    const [listaCriptomonedas, setListaCriptomonedas] = useState([])

    const MONEDAS = [
        { codigo: 'MXN', nombre:"Peso Mexicano" },
        { codigo: 'USD', nombre:"Dolar de Estados Unidos" },
        { codigo: 'EUR', nombre:"Euro" },
        { codigo: 'GBP', nombre:"Libra Esterlina" },
    ]

    const [moneda, SelectMoneda] = useMoneda('Elija su moneda: ','',MONEDAS)
    
    const [criptomoneda, SelectCriptomoneda] = useCriptomoneda('Elija su criptomoneda','',listaCriptomonedas);

    const [validaErrorCriptomonedas, setValidaErrorCriptomonedas] = useState({
        errorCriptomonedas:false,
        msjErrorCriptomonedas:''
    })


    const { errorCriptomonedas, msjErrorCriptomonedas } = validaErrorCriptomonedas;

    useEffect( () => {

        const consultarAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            setListaCriptomonedas(resultado.data.Data);

        }

        consultarAPI();

    }, [])
    

    const submitCalcularMoneda = async (e) => {

        e.preventDefault();

        const estado = validaCriptomonedas(moneda,criptomoneda);

        setValidaErrorCriptomonedas(estado);

         if(estado.errorCriptomonedas)
         return 

        setLoadingSpinner(true)

        const requestApi = await resultadoApiCriptoCotizacion(moneda,criptomoneda);

        setTimeout(()=> {

            setCriptoCotizacion({
                moneda,
                criptomoneda,
                resultado: requestApi.data.DISPLAY[criptomoneda][moneda]
            })
    
            setLoadingSpinner(false)

        },1000)

        

    }

  return (
    <form onSubmit={submitCalcularMoneda}>

        {errorCriptomonedas ? <ErrorValidacion msjErrorCriptomonedas={msjErrorCriptomonedas}/>  : ''}

        <SelectMoneda/>

        <SelectCriptomoneda/>

        <Boton 
            type="submit"
        >
        Calcular
        </Boton>
    </form>
  )
}
