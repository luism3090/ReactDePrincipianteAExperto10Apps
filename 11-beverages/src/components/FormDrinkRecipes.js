import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import { RecipesContext } from '../context/RecipesContext';


const FormDrinkRecipes = () => {

    const { categories } = useContext(CategoriesContext);

    const { setSearchDrinks, setControlSearchDrinks } = useContext(RecipesContext);

    const [drinks, setDrinks] = useState({
        ingredient:'',
        category:''
    })

    const {ingredient, category} = drinks;

    const [validateDrinks, setValidateDrinks] = useState({
        errorValidateDrinks:false,
        msjValidateDrinks:''
    })

    const {errorValidateDrinks, msjValidateDrinks} = validateDrinks;


    const changeDrinks = (e) => {

        setDrinks({...drinks,
                    [e.target.name]:e.target.value
                })

    }

    const submitDrinkRecipes = (e) => {

        e.preventDefault();
        if(ingredient.trim() === ""){
            setValidateDrinks({
                errorValidateDrinks:true,
                msjValidateDrinks:'The field ingredient is required'
            })
            return;
        }
        else if(category.trim() === "" ){
            setValidateDrinks({
                errorValidateDrinks:true,
                msjValidateDrinks:'The field category is required'
            })
            return;
        }

        setValidateDrinks({
            errorValidateDrinks:false,
            msjValidateDrinks:''
        })
        setSearchDrinks(drinks);
        setControlSearchDrinks(true);

    }


  return (
    <>
        <form className='col-12' onSubmit={submitDrinkRecipes}>
            <fieldset className='text-center'>
                <legend> Search drinks by category or ingredient</legend>
            </fieldset>
            { errorValidateDrinks ? <p> {msjValidateDrinks} </p>: '' }
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        name="ingredient"
                        className='form-control'
                        type="text"
                        placeholder='Search by ingredient'
                        onChange={changeDrinks}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name="category"
                        onChange={changeDrinks}
                    >
                        <option value="">-- Select category --</option>
                        { 
                            categories.map((cat)=> (

                                <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>
                            ) )
                        }
                    </select>
                </div>
                <div className='col-md-4'>
                    <button 
                        type="submit"
                        className='btn btn-block btn-primary'
                    >
                        Search Drinks
                    </button>
                </div>
            </div>
        </form>
    </>
  )
}

export default FormDrinkRecipes