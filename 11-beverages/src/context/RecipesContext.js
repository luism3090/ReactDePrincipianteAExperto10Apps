import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

  const [recipes, setRecipes] = useState([]);

  const [searchDrinks, setSearchDrinks] = useState({});

  const [controlSearchDrinks, setControlSearchDrinks] = useState(false)

  const { ingredient, category } = searchDrinks;

  useEffect(() => {
    
    if(controlSearchDrinks){

      const getRecipes = async () => {

        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
  
        const request = await axios(url);
  
        setRecipes(request.data.drinks);
  
      }
  
      getRecipes();

    }
    

  }, [searchDrinks, controlSearchDrinks, ingredient, category])
  


  return(

    <RecipesContext.Provider
      value={{
        recipes,
        setSearchDrinks,
        setControlSearchDrinks
      }}
    >
      {props.children}
    </RecipesContext.Provider>

  )

}

export default RecipesProvider