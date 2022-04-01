import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Noticia from './Noticia';

const ListadoNoticias = ( {noticias} ) => {

  return (
    <div className='row'>
        { noticias && noticias.map( noticia =>(
          <Noticia
            key={uuidv4()}
            noticia={noticia}
          />
        ))}
    </div>
  )
}

export default ListadoNoticias