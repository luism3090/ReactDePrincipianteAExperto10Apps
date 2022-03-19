import React, { useState } from 'react'

const styleAgenda = {
  position: "fixed",
  top: 0,
  right:100,
  backgroundColor: 'white',
  with: "400px"
};


const Footer = (props) => {
  
  return(
    <>
      <div>Todos los derechos reservados {props.fecha}</div>
    </>
  )

}

const Header = (props) => {

  return(
    <>
      <h1>
        {props.titulo}
      </h1>
    </>
  )

}

const Persona = (props) => {

  const { persona, agenda, setAgregarAgenda } = props;

  const { nombre, edad, telefono } = persona;

  const agregarPersona = () => {

    setAgregarAgenda([
        ...agenda,
        persona
      ]
      )    

  }

  return(
  <div>
    <h2>
      <label>Nombre:</label> <label>{nombre}</label>
    </h2>
    <h2>
      <label>Edad:</label> <label>{edad}</label>
    </h2>
    <h2>
      <label>Telefono:</label> <label>{telefono}</label>
    </h2>
    <div>
      <button
        type='button'
        onClick={ ()=> agregarPersona(nombre,edad) }
      >
        Agregar
      </button>
    </div>
    
  </div>
  )

}



const Agenda = ( {agenda, setAgregarAgenda} ) => {

  const eliminarPersona = (id) => {

    const filterAgencia = agenda.filter( (age) => age.id !== id )
  
    setAgregarAgenda(filterAgencia)
  
  }

  return(
      
    <div style={styleAgenda}>

      <h1>Agenda de personas</h1>

      {
        agenda.length === 0 
        ?
          <div>No hay personas agregadas</div>
        :
          agenda.map( (agPersona) => 
            (
                <span key={agPersona.id}>
                  <div>
                  {agPersona.nombre}
                  </div>
                  <div>
                  {agPersona.edad}
                  </div>
                  <div>
                    {agPersona.telefono}
                  </div>
                  <div>
                  <button
                    onClick={()=> eliminarPersona(agPersona.id)}
                  >
                    Eliminar
                  </button>
                  </div>
                  <br/>
                </span>
            ))
      }

    </div>

  )

}

const App = () => {

  const [personas, setPersonas] = useState([
    { id: 1, nombre:"Luis", edad: 30, telefono:"42134324323" },
    { id: 2, nombre:"David", edad: 25, telefono:"3784573673" },
    { id: 3, nombre:"Juan", edad: 15, telefono:"98453784384" },
    { id: 4, nombre:"Ana", edad: 40, telefono:"07823637434"}
  ])

  const [agenda, setAgregarAgenda] = useState([])

  const fecha = new Date().getFullYear();

  return (
    <>
      <Header
        titulo="Tienda Vitual"
      />

      <h1>Listado de personas</h1>
      {
        personas.map((persona,index) => (

          <Persona
            key={persona.id}
            persona={persona}
            agenda={agenda}
            setAgregarAgenda={setAgregarAgenda}
          />

        ))
      }

          <Agenda
            agenda={agenda}
            setAgregarAgenda={setAgregarAgenda}            
          />

      <br/>
      <Footer
        fecha={fecha}
      />
    </>
  )
}

export default App

// Otra forma de hacerlo

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