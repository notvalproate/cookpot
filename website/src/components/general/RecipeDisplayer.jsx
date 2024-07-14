import './RecipeDisplayer.css';

function RecipeDisplayer(props) {
    const recipes = props.recipes;
    const defaultCoverPhoto = "http://localhost:4000/images/cover-placeholder.jpg";

    return (
        <>
            <div className="recipe-displayer-container">
                {recipes.map((recipe, index) => {
                    return (
                        <a key={index} href={recipe.recipeUrl} className="recipe-displayer-recipe">
                            <img src={recipe.coverPhoto || defaultCoverPhoto} alt={recipe.recipeName} className="recipe-banner"/>
                            <span className="recipe-title">{recipe.recipeName}</span>
                            <span className="recipe-by">By {recipe.createdBy}</span>
                            <span className="recipe-desc">{recipe.description}</span>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export default RecipeDisplayer;