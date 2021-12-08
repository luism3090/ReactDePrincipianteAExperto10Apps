import React from 'react'

const Producto = ( { producto, stCarrito, setCarrito, accion } ) => {

  const {nombre, precio } = producto;

  const comprarProducto = (producto) =>{

    //const product = stProductos.filter( p => p.id === producto.id)[0]

    //console.log(product);
    //console.log(producto);

    setCarrito([
      ...stCarrito,
      producto
    ])

  }

  const eliminarProducto = (producto) => {

      const { id } = producto;

      const product = stCarrito.filter( (p) => p.id !== id )

      setCarrito(product)
    
  }

  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {
        accion === "comprar"
        ?
          <button
            onClick={()=> comprarProducto(producto)}
          >
            Comprar
          </button>
        :
          <button
            onClick={()=> eliminarProducto(producto)}
          >
            Eliminar
          </button>
      }
      
    </div>
  )
}

export default Producto
