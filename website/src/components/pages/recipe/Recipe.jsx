import './Recipe.css';

import Nav from '../../general/Nav';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Recipe() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState(null);
    const recipeId = useParams().id;
    const defaultCoverPhoto =
        'http://localhost:4000/images/cover-placeholder.jpg';

    useEffect(() => {
        document.title = 'cookpot | Recipe';

        const loadRecipe = async () => {
            const res = await axios.get(
                'http://localhost:4000/recipe/id/' + recipeId,
                {
                    validateStatus: (status) => status >= 200 && status <= 500,
                }
            );

            setLoading(false);

            if (res.status === 200) {
                setRecipe(res.data);
                document.title = `cookpot | ${res.data.recipeName}`;
            }
        };

        loadRecipe();
    }, []);

    return (
        <>
            <Nav />
            <div className="recipe-container">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        {recipe === null ? (
                            <>
                                <h1>Recipe not found</h1>
                                <button
                                    className="standard-button"
                                    onClick={() => navigate('/discover')}
                                >
                                    Go Back
                                </button>
                            </>
                        ) : (
                            <div className="recipe-wrapper">
                                <img
                                    className="recipe-cover-display"
                                    src={recipe.coverPhoto || defaultCoverPhoto}
                                    alt="cover-photo"
                                />
                                <h1 className="recipe-name-display">
                                    {recipe.recipeName}
                                </h1>
                                <span className="recipe-creator-display">
                                    By {recipe.createdBy}
                                </span>
                                <h2 className="recipe-subtitle">Description</h2>
                                <p className="recipe-description-display">
                                    {recipe.description}
                                </p>
                                <h2 className="recipe-subtitle">Ingredients</h2>
                                <p className="recipe-description-display">
                                    {recipe.ingredients
                                        .split('\n')
                                        .map((recipe, index) => {
                                            return (
                                                <span key={index}>
                                                    {recipe}
                                                    <br />
                                                </span>
                                            );
                                        })}
                                </p>
                                <h2 className="recipe-subtitle">
                                    Instructions
                                </h2>
                                <p className="recipe-description-display">
                                    {recipe.instructions
                                        .split('\n')
                                        .map((recipe, index) => {
                                            return (
                                                <span key={index}>
                                                    {recipe}
                                                    <br />
                                                </span>
                                            );
                                        })}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Recipe;
