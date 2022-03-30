import { useState } from 'react';
import styled from 'styled-components';
import { FormCripto } from './components/FormCripto';
import { ResultadoCriptoCotizacion } from './components/ResultadoCriptoCotizacion';
import { Spinner } from './components/Spinner';
import imagen from './criptomonedas.webp'


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const ImagenCripto = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 80px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }

`

function App() {

  const [criptoCotizacion, setCriptoCotizacion] = useState({
    moneda:'',
    criptomoneda:'',
    resultado:{}
  })

  const { resultado } = criptoCotizacion

  const [loadingSpinner, setLoadingSpinner] = useState(false)

  return (
    <Contenedor>
      <div>
        <ImagenCripto
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <FormCripto
          setCriptoCotizacion={setCriptoCotizacion}
          setLoadingSpinner={setLoadingSpinner}
        />
        { loadingSpinner === false ? ( Object.keys(resultado).length > 0 ? <ResultadoCriptoCotizacion resultado={resultado}/> : '' ) : '' } 
        { loadingSpinner ? <Spinner /> : '' }
      </div>
    </Contenedor>
  );
}

export default App;