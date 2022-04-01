import { useEffect, useState } from "react";
import FormNoticias from "./components/FormNoticias";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  const [categoriaNoticia, setCategoriaNoticia] = useState('')

  const [noticias, setNoticias] = useState([])


  useEffect(() => {
    
    if(categoriaNoticia){

      const consultarAPI = async (categoriaNoticia) => {

        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoriaNoticia}&apiKey=df69c593d0ee4585ac8670e342463a24`

        let resultado = await fetch(url);

        resultado = await resultado.json();

        if(resultado.status !== "error"){
          setNoticias(resultado.articles)
        }
        else{
          alert("Ocurrio un error al consultar el API de noticias");
        }

      }

      consultarAPI(categoriaNoticia);

    }

  }, [categoriaNoticia])
  

  return (
    <>
      <Header titulo="Buscador de noticias"/>
      <div className="container white">
          <FormNoticias
            setCategoriaNoticia={setCategoriaNoticia}
          />

          <ListadoNoticias
              noticias={noticias}
          />
      </div>
    </>
  );
}

export default App;
