import './Search.css'

import Nav from '../../general/Nav';
import RecipeDisplayer from '../../general/RecipeDisplayer';
import { useEffect, useState } from 'react';

function Search() {
    useEffect(() => {
        document.title = "cookpot | Search"
    }, [])

    const [recipes, setRecipes] = useState([]);

    function getSearchResults() {
        const recipesTest = [
            {
                title: "Spaghetti",
                description: "Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
                imgUrl: "spaget.jpg",
                recipeUrl: "/recipe?id=1"
            },
            {
                title: "Spaghetti",
                description: "Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
                imgUrl: "spaget.jpg",
                recipeUrl: "/recipe?id=1"
            },
            {
                title: "Spaghetti",
                description: "Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
                imgUrl: "spaget.jpg",
                recipeUrl: "/recipe?id=1"
            },
            {
                title: "Spaghetti",
                description: "Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
                imgUrl: "spaget.jpg",
                recipeUrl: "/recipe?id=1"
            },
        ];

        setRecipes(recipesTest);
    }

    return (
        <>
            <Nav/>
            <div className="search-container">
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Search for recipes..."/>
                    <button className="standard-button search-button" onClick={getSearchResults}>Search</button>
                </div>
                { recipes.length === 0 ? 
                    <h1>No results</h1> 
                    :
                    <div className="search-results">
                        <RecipeDisplayer recipes={recipes}/>
                    </div>
                }
            </div>
        </>
    );
}

export default Search;