import { useState } from "react";
import styled from "styled-components";
import { FormCotizador } from "./Components/FormCotizador";
import Header from "./Components/Header";
import ResultadoCotizacion from "./Components/ResultadoCotizacion";
import { ResumenCotizacion } from "./Components/ResumenCotizacion";
import { Spinner } from "./Components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContFormCotizador = styled.div`

  background-color:#FFF;
  padding:3rem;

`;

function App() {

  const [datosCotizacion, setDatosCotizacion] = useState(0);

  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  return (
    <Contenedor>
      <Header 
          titulo="Cotizador de seguros" 
      />

      <ContFormCotizador>
          <FormCotizador
            setDatosCotizacion={setDatosCotizacion}
            setMostrarSpinner={setMostrarSpinner}
          />

          {mostrarSpinner ? <Spinner /> : ''}

          {datosCotizacion ? <ResumenCotizacion datosCotizacion={datosCotizacion}/> : ''}
          
          <ResultadoCotizacion datosCotizacion={datosCotizacion} mostrar={mostrarSpinner}/>

      </ContFormCotizador>

    </Contenedor>
  );
}

export default App;
