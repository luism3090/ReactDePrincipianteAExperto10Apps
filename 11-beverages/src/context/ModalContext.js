import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = (props) => {

    // state of provider

    const [idRecipe, setIdRecipe] = useState(null);

    const [infoRecipe, setInfoRecipe] = useState({})


    useEffect(() => {
      
        if(idRecipe!== null){

            const getInfoRecipe = async () => {

                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
    
                const request = await axios(url);
    
                setInfoRecipe(request.data.drinks[0]);
    
            }
    
            getInfoRecipe();
        }


    }, [idRecipe])
    

    return(

        <ModalContext.Provider
            value={{
                setIdRecipe,
                setInfoRecipe,
                infoRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>

    )

}

export default ModalProvider