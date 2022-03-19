import React, { useState } from 'react'

const FormPresupuesto = (props) => {

    const { presupuesto, setPresupuesto, setMostrarGastos ,setPresupuestoRestante } = props;

    const [validaPresupuesto, setValidaPresupuesto] = useState({
        error:false,
        msjError:''
    })

    const changePresupuesto = (e) => {

        setPresupuesto(e.target.value)

    }

    const submitPresupuesto = (e) => {

        e.preventDefault();

        if(presupuesto===""){
            setValidaPresupuesto({
                error:true,
                msjError:"El presupuesto no es válido"
            })
            return
        }
        else if(parseInt(presupuesto)<=0){
            setValidaPresupuesto({
                error:true,
                msjError:"El presupuesto debe ser positivo"
            })
            return
        }

        setValidaPresupuesto({
            error:false,
            msjError:""
        })

        setMostrarGastos(false);
        setPresupuestoRestante(presupuesto)

    }


return (
    <>
        <h2>Coloca tu presupuesto</h2>
         { validaPresupuesto.error ?  <p className='alert alert-danger error'> {validaPresupuesto.msjError} </p> : '' } 
        <form>
            <input
                type="number"
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                value={presupuesto}
                onChange={changePresupuesto}
                maxLength={10}

            />
            <button
                //type='submit'
                className='button-primary u-full-width'
                onClick={submitPresupuesto}
            >
                Definir presupuesto
            </button>
        </form>
    </>
  )
}

export default FormPresupuesto