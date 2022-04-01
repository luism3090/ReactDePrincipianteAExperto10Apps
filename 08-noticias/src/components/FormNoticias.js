import React, { useState } from 'react'
import styles from './FormNoticias.module.css'
import useSelect from '../hooks/useSelect'

const FormNoticias = ( { setCategoriaNoticia } ) => {

    const OPCIONES = [
        {value:'general',categoria:"General"},
        {value:'business',categoria:"Negocios"},
        {value:'entertainment',categoria:"Entretenimiento"},
        {value:'health',categoria:"Salud"},
        {value:'science',categoria:"Ciencia"},
        {value:'sports',categoria:"Deportes"},
        {value:'technology',categoria:"Tecnología"},
    ]

    const [categoria, SelectCategorias] = useSelect('general',OPCIONES)

    const submitBuscarNoticia = (e) => {

        e.preventDefault();

        setCategoriaNoticia(categoria)

    }

  return (
    <>
    
        <div className={`${styles.buscador}`}>

            <div className='col s12 m8 offset-'>
                <form onSubmit={submitBuscarNoticia}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectCategorias />

                    <div className='input-field col s12'>

                        <button type='submit'
                                className={`${styles['btn-block']} btn-large amber darken-2`}
                        >
                            Buscar
                        </button>
                    </div>
                </form>

            </div>
        </div>

        
    </>
  )
}

export default FormNoticias