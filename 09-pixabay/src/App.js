import { useEffect, useState } from "react";
import FormImages from "./components/FormImagenes";
import { ListadoImagenes } from "./components/ListadoImagenes";


function App() {
  
  const [imagenes, setImagenes] = useState([])

  const [busqueda, setBusqueda] = useState('');

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    

    if(busqueda.trim() !== ""){

      const getDatosApi = async ()=> {

        const imagesByPage = 30;
  
        const url = `https://pixabay.com/api/?key=26453989-1d4db561b43345423f491d9fd&q=${busqueda}&image_type=photo&per_page=${imagesByPage}&page=${currentPage}`;
    
        let request = await fetch(url);
    
        request = await request.json();
    
        setImagenes(request.hits);
    
        const calculateTotalPages = Math.ceil(request.totalHits / imagesByPage)
    
        setTotalPages(calculateTotalPages);

        const jumbotron = document.querySelector(".jumbotron");
        jumbotron.scrollIntoView({behavior:"smooth"})

  
      }
  
      getDatosApi();

    }

  }, [busqueda,currentPage])
  

  const previousPage = () => {

    const currentPage_Temp = currentPage - 1

    if(currentPage_Temp === 0)
      return;

    setCurrentPage(currentPage_Temp)

  }

  const nextPage = ()=> {

    const currentPage_Temp = currentPage + 1

    if(totalPages < currentPage_Temp)
      return;    

    setCurrentPage(currentPage_Temp)

  }  

  return (
    <div className="container">
      <div className="jumbotron"> 
        <p className="lead text-center">
          Buscador de Imágenes
        </p>
        <FormImages 
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="row justify-content-center">
          
          <ListadoImagenes
            imagenes={imagenes}
          />

          { currentPage > 1 
          
          ?
            <button
              type="button"
              id="btnPreviousPage"
              className="bbtn btn-info mr-1"
              onClick={previousPage}
            >
              &laquo; Anterior 
            </button>
          
          :

          ''
          
          }

          
          {
            currentPage < totalPages 
            
            ?

            <button
              type="button"
              id="btnNextPage"
              className="bbtn btn-info mr-1"
              onClick={nextPage}
            >
              Siguiente &raquo; 
            </button>
            
            : 

            ''

          }
          
      </div>

      <br/>

    </div>
  );
}

export default App;
