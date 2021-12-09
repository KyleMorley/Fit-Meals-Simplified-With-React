import RecipeCard from './RecipeCard'
import SearchRecipes from './SearchRecipes'
import { useState, useEffect } from 'react'

const Services = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('')
    

    useEffect(() => {
        const getData = async() => {
            const data = await fetchData();
            setRecipes(data.results);
        };

        getData();
    }, [search]);

    const fetchData = async() => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?maxFat=25&number=12&addRecipeNutrition=true&apiKey=6a0d61d6acdc4ed3b13163587a7100fd&query=${ search }`);

        const data = await res.json();

        return data;
    }

    return (
        <div className='card-container'>
                {
                    recipes.length > 0 ?
                    recipes.map((recipe) => (
                        <RecipeCard recipe={ recipe } key={ recipe.id }/>
                    ))
                    :
                    'Search Recipes'
                }   
            <SearchRecipes searchRecipes={ (text) =>  setSearch(text) }/> 
        </div>
    )
}

export default Services

