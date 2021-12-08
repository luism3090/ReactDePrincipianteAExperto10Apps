import React from 'react'
import './carrito.css'
import Producto from './Producto'

const Carrito = ( {carrito,agregarProducto } ) => {
    return (
        <div className="carrito">
            <h2>Tu carrito de compras </h2>
            {
                carrito.length === 0 
                ?
                    <div>No hay productos en el carrito</div>
                :
                    carrito.map((producto) => (
                        <Producto 
                            key={producto.id}
                            producto={producto}
                            carrito={carrito}
                            agregarProducto={agregarProducto}
                            boton={"Eliminar"}
                            />
                    ))
            }
        </div>
    )
}

export default Carrito
