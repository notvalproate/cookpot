import './RecipeDisplayer.css';

function RecipeDisplayer(props) {
    const recipes = props.recipes;

    return (
        <>
            <div className="recipe-displayer-container">
                {recipes.map((recipe, index) => {
                    return (
                        <div key={index} className="recipe-displayer-recipe">
                            <img src={recipe.imgUrl} alt={recipe.title} className="recipe-banner"/>
                            <span className="recipe-title">{recipe.title}</span>
                            <span className="recipe-desc">{recipe.description}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RecipeDisplayer;