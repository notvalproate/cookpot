import './Discover.css';

import Nav from '../../general/Nav';
import RecipeDisplayer from '../../general/RecipeDisplayer';
import { useEffect, useState } from 'react';

import axios from 'axios';

function Discover() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        document.title = 'cookpot | Discover';

        const loadRecipes = async () => {
            const res = await axios.get(
                'http://localhost:4000/recipe/discover'
            );

            setRecipes(res.data);
        };

        loadRecipes();
    }, []);

    return (
        <>
            <Nav />
            <div className="discover-container">
                <h1>Discover New Recipes!</h1>
                <RecipeDisplayer recipes={recipes} />
            </div>
        </>
    );
}

export default Discover;
