import React from 'react'
import './carrito.css'
import Producto from './Producto'

const Carrito = ( { stCarrito, setCarrito } ) => (
  <div className="carrito">
    <h2 >Tu carrito de compras</h2>
    { 
      stCarrito.length === 0
      ?
        <p>No hay productos en el carrito</p>
      :
      stCarrito.map( (producto) => 
        (
            <Producto
              key={producto.id}
              producto={producto}
              accion={"eliminar"}
              stCarrito={stCarrito}
              setCarrito={setCarrito}

            />
          )
      )
    }
  </div> 
)


export default Carrito
