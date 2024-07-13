import './RecipeDisplayer.css';

function RecipeDisplayer(props) {
    const recipes = props.recipes;

    return (
        <>
            <div className="recipe-displayer-container">
                {recipes.map((recipe, index) => {
                    return (
                        <a key={index} href={recipe.recipeUrl} className="recipe-displayer-recipe">
                            <img src={recipe.imgUrl} alt={recipe.title} className="recipe-banner"/>
                            <span className="recipe-title">{recipe.title}</span>
                            <span className="recipe-desc">{recipe.description}</span>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export default RecipeDisplayer;