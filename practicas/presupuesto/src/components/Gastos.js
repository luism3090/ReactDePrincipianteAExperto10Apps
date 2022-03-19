import React from 'react'

export const Gastos = (props) => {

    const { gastos } = props;

  return (
    <>
        { gastos.length === 0 ? <h2>No hay gastos</h2>: ''}

        {
            gastos.map((gasto) => (
                <li key={gasto.id} className="gastos">
                    <p>
                        {gasto.NombreGasto}
                        <span className="gasto"> ${gasto.CantidadGasto}</span>
                    </p>
                </li>
            ))
        }
    </>
  )
}
