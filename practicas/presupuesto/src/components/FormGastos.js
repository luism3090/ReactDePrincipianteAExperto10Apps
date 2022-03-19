import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const FormGastos = (props) => {

    const { agregarGastos, presupuestoRestante } = props;

    const [gasto, setGasto] = useState({
        NombreGasto:'',
        CantidadGasto:''
    })

    const {NombreGasto, CantidadGasto} = gasto;

    const [validaGasto, setValidaGasto] = useState({
        errorGasto:false,
        msjErrorGasto:''
    })

    const { errorGasto, msjErrorGasto } = validaGasto;

    const guardarGastos = (e) => {

        e.preventDefault();

        if(NombreGasto.trim()===""){

            setValidaGasto({
                errorGasto:true,
                msjErrorGasto:'El nombre del gasto es obligatorio'
            })
            return
        }
        else if(CantidadGasto===""){
            setValidaGasto({
                errorGasto:true,
                msjErrorGasto:'La cantidad del gasto es obligatorio'
            })
            return
        }
        else if( parseInt(CantidadGasto) < 0 ){
            setValidaGasto({
                errorGasto:true,
                msjErrorGasto:'La cantidad del gasto debe ser positiva'
            })
            return
        }
        else if(parseInt(presupuestoRestante) < parseInt(CantidadGasto)){
            setValidaGasto({
                errorGasto:true,
                msjErrorGasto:'El gasto es mayor que tu presupuesto restante'
            })
            return
        }

        setValidaGasto({errorGasto:false,msjErrorGasto:""})

        setGasto({NombreGasto:'',CantidadGasto:''})

        gasto.id = uuidv4();

        agregarGastos(gasto);

    }

    const changeGastos = (e) => {

        const campo = e.target.name;
        const value = e.target.value;

        setGasto({
            ...gasto,
            [campo]:value
        })

        if(campo==="NombreGasto"){
            
            if(value.trim()===""){
                setValidaGasto({
                    errorGasto:true,
                    msjErrorGasto:'El nombre del gasto es obligatorio'
                })

                return
            }
            
        }
        if(campo==="CantidadGasto"){

            if(value===""){
                setValidaGasto({
                    errorGasto:true,
                    msjErrorGasto:'La cantidad del gasto es obligatorio'
                })
                return
            }
            else if( parseInt(value) < 0 ){

                setValidaGasto({
                    errorGasto:true,
                    msjErrorGasto:'La cantidad del gasto debe ser positiva'
                })

                return
            
            }
            
        }
        

        setValidaGasto({errorGasto:false,msjErrorGasto:""})

    }

  return (
    <>
        <form onSubmit={guardarGastos}>

            <h2>Agrega tus gastos aquí</h2>

            { errorGasto ?  <p className='alert alert-danger error'> {msjErrorGasto} </p> : '' } 

            <div className='campo'>
                <label htmlFor='NombreGasto'>
                    Nombre Gasto
                </label>
                <input
                    type="text"
                    className='u-full-width'
                    id='NombreGasto'
                    name="NombreGasto"
                    placeholder='Ej. Transporte'
                    onChange={changeGastos}
                    value={NombreGasto}
                />
            </div>

            <div className='campo'>
                <label htmlFor='CantidadGasto'>
                        Cantidad Gasto
                </label>
                <input
                    type="number"
                    className='u-full-width'
                    id='CantidadGasto'
                    name='CantidadGasto'
                    placeholder='Ej. 300'
                    onChange={changeGastos}
                    value={CantidadGasto}
                />
            </div>
            
            <input
                type="submit"
                className='button-primary u-full-width'
                value="Agregar Gasto"
            />
            
        </form>

    </>
  )
}

export default FormGastos