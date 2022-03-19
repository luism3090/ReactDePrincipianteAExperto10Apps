import React from 'react'
import { revisarPresupuesto, sumaNumeros } from './helpers'

export const ControlPresupuesto = (props) => {

    const { presupuesto, presupuestoRestante} = props;

    let clase = revisarPresupuesto(presupuesto,presupuestoRestante)

  return (
    <>

        <div className='alert alert-primary'>
            Presupuesto: <strong>$ {presupuesto}</strong>
        </div>
        <div className={`alert ${clase}`}>
            Restante: <strong>$ {presupuestoRestante}</strong>
            
        </div>
        <br/>
    
    </>
  )
}
