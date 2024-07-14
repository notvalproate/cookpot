import './Search.css'

import Nav from '../../general/Nav';
import RecipeDisplayer from '../../general/RecipeDisplayer';
import { useEffect, useState } from 'react';

import axios from 'axios';

function Search() {
    useEffect(() => {
        document.title = "cookpot | Search"
    }, [])

    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    async function getSearchResults() {
        const q = searchQuery.trim();

        if(q === "") return;

        const params = new URLSearchParams({
            q: q,
        });

        const recipes = await axios.get("http://localhost:4000/recipe/search?" + params.toString());

        setRecipes(recipes.data);
    }

    return (
        <>
            <Nav/>
            <div className="search-container">
                <div className="search-box">
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" placeholder="Search for recipes..."/>
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