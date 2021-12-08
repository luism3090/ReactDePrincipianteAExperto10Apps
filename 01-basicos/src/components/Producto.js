import React from 'react'

const Producto = ( { 
    producto,
    carrito,
    productos,
    boton,
    agregarProducto
 } ) => {

    const { nombre, precio, id } = producto;

    const agregar = ( id ) => {
        const producto = productos.filter(producto => producto.id === id)[0]
        
        agregarProducto([
            ...carrito,
            producto
        ])

    }

    const eliminar = ( id ) => {

        const productos = carrito.filter(producto => producto.id !== id)

        agregarProducto(productos)

    }

    return (
        <>
            <h2> { nombre } </h2>
            <p> ${ precio } </p>
            <button
                onClick={ boton === "Agregar" ? () => agregar( id ) :  () => eliminar( id ) }
            >
                {boton}
            </button>
        </>
    )
}

export default Producto
