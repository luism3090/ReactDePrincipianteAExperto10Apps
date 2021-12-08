import React, { useState } from 'react'
import Header from './views/Header'
import Footer from './views/Footer'
import Producto from './views/Producto'
import Carrito from './views/Carrito'

const App = () => {

  // state del listado de productos

  const [stProductos, setProductos] = useState([
    { id:1, nombre:'Camisa React Js', precio:200 },
    { id:2, nombre:'Camisa Angular Js', precio:150 },
    { id:3, nombre:'Camisa Node Js', precio:250 },
    { id:4, nombre:'Camisa Vue Js', precio:120 },
  ])

  // state del carrito de compras

  const [stCarrito, setCarrito] = useState([])


  // acion del carrito de compras

  const [stAccion, setAccion] = useState("comprar")

  // obteniendo el año
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header 
        titulo="Tienda virtual"
        numero={20}
      />

      <h1>Listado de productos</h1>
      {stProductos.map( producto =>(
          <Producto
            key={producto.id}
            producto={producto}
            stProductos={stProductos}
            stCarrito={stCarrito}
            setCarrito={setCarrito}
            accion={"comprar"}
          />
      ) )}

      <Carrito
        stCarrito={stCarrito}
        setCarrito={setCarrito}
      />

      <Footer 
        fecha={fecha}
      />
    </>
  )
}

export default App




/*
import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // state para el listado de productos 

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa React js", precio:50 },
    { id: 2, nombre: "Camisa Javascript", precio:40 },
    { id: 3, nombre: "Camisa Node js", precio:30 },
    { id: 4, nombre: "Camisa Angular js", precio:20 },
  ])


  // state para el carrito de compras

   const [carrito, agregarProducto] = useState([])

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <>
        <Header 
            titulo="Tienda Virtual"
            numero={20}
        />

        <h1>Lista de productos</h1>
        {
            productos.map(producto  =>(
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                    productos={productos}
                    boton={"Agregar"}
                />
            ) )
        }

        <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
        />

        <Footer
        fecha={fecha}
        />
    </>
  );
}

export default App;
*/