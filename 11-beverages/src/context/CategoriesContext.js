import { createContext, useEffect, useState } from "react";
import axios from 'axios'

// create the context

export const CategoriesContext =  createContext();

// create a Provider, here´s, where find the functions and state
const CategoriesProvider = (props) => {

    // create the state context

    const [categories, setCategories] = useState([]);

    useEffect(() => {
    
        const getDataCategories = async () => {

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios(url);

            setCategories(categories.data.drinks);

        }

        getDataCategories();

    }, [])
    

    return(
        <CategoriesContext.Provider 
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )

}

export default CategoriesProvider