import './Discover.css';

import Nav from '../../general/Nav';
import RecipeDisplayer from '../../general/RecipeDisplayer';

function Discover() {
    const recipes = [
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
    ]
    
    return (
        <>
            <Nav/>
            <div className="discover-container">
                <h1>Discover New Recipes!</h1>
                <RecipeDisplayer recipes={recipes}/>
            </div>
        </>
    )
}

export default Discover;