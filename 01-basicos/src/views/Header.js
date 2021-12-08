import React from 'react'

const Header = ({titulo, numero}) => {

  return (
    <>
      <h1 className="encabezado">{titulo} {numero}</h1>

    </>

  )

}

export default Header