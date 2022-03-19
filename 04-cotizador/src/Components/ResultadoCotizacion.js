import React from 'react'
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const ResultadoCotizacion = (props) => {

  const Mensaje = styled.p`
  background-color: rgb(127,224,237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  `;

  const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin: 0%;
  `

const ContenedorCotizacion = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127,224,237);
  margin-top: 1rem;
  position: relative;
`;

    if(props.datosCotizacion === 0) 
        return <Mensaje>Elija la marca, el año y el plan para la cotización</Mensaje>
    else if(props.mostrar)
        return ''

    const { resultado} = props.datosCotizacion;

  return (
    <>
        <ContenedorCotizacion>
          <TransitionGroup
            component="div"
            className="resultado"
          >
            <CSSTransition
                classNames="resultado"
                key={resultado}
                timeout={{enter: 500, exit: 500}}
            >
              <TextoCotizacion> El total es: $ { resultado }</TextoCotizacion>
            </CSSTransition>
          </TransitionGroup>
        </ContenedorCotizacion>
    </>
  )
}

export default ResultadoCotizacion