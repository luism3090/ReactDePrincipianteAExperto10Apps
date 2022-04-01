import React, { useState } from 'react'

const useSelect = ( initialState, opciones ) => {

    const [categorias, setCategorias] = useState(initialState)

    const SelectCategorias = () => (
            <>
                <select 
                    id="categoria"
                    onChange={ (e)=> setCategorias(e.target.value)}
                    className="browser-default"
                    value={categorias}
                >
                    {opciones.map( cat => (
                        <option key={cat.value} value={cat.value} >{cat.categoria}</option>
                    ))}
                </select>
            </>
        )

    return [categorias, SelectCategorias]

}

export default useSelect