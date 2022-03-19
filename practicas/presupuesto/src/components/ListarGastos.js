import React from 'react'
import { Gastos } from './Gastos';
import { ControlPresupuesto } from './ControlPresupuesto';

export const ListarGastos = (props) => {

    const { presupuesto, gastos, presupuestoRestante} = props;

  return (
    <div className="gastos-realizados">
        <h2>Listado Gastos</h2>
        
        <ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
            presupuestoRestante={presupuestoRestante}
        />
        
        <Gastos 
            gastos={gastos}
        />
    </div>
  )
}
