import './MyRecipes.css'

import Nav from '../../general/Nav';
import RecipeDisplayer from '../../general/RecipeDisplayer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MyRecipes() {
    const loggedIn = useSelector(state => state.user.loggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "cookpot | My Recipes"
        if(!loggedIn) {
            navigate('/login');
        }
    }, []);

    const [create, setCreate] = useState(false);

    const recipes = [
        {
            title: "Spaghetti",
            description: "Nais pasta dish dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
            imgUrl: "spaget.jpg",
            recipeUrl: "/recipe?id=1"
        },
        {
            title: "Spaghetti",
            description: "Nais pasta dish dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
            imgUrl: "spaget.jpg",
            recipeUrl: "/recipe?id=1"
        },
        {
            title: "Spaghetti",
            description: "Nais pasta dish dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
            imgUrl: "spaget.jpg",
            recipeUrl: "/recipe?id=1"
        },
        {
            title: "Spaghetti",
            description: "Nais pasta dish dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
            imgUrl: "spaget.jpg",
            recipeUrl: "/recipe?id=1"
        },
        {
            title: "Spaghetti",
            description: "Nais pasta dish dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish Nais pasta dish ",
            imgUrl: "spaget.jpg",
            recipeUrl: "/recipe?id=1"
        },
    ];

    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('recipeName', recipeName);
        formData.append('description', description);
        formData.append('ingredients', ingredients);
        formData.append('instructions', instructions);
        if(coverPhoto) {
            formData.append('coverPhoto', coverPhoto);
        }

        try {
            const res = await fetch('http://localhost:4000/api/recipes', {
                method: 'POST',
                body: formData,
            });

            if(res.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function resetForm() {
        setRecipeName('');
        setDescription('');
        setIngredients('');
        setInstructions('');
        setCoverPhoto(null);
        setSubmitted(false);
    }

    return (
        <>
            <Nav/>
            <div className="myrecipes-container">
                <div className="myrecipes">
                    <ul className="myrecipes-left">
                        <li className={`myrecipes-left-item ${create ? '' : 'myrecipes-left-selected'}`} onClick={() => setCreate(false)}>My Recipes</li>
                        <li className={`myrecipes-left-item ${create ? 'myrecipes-left-selected' : ''}`} onClick={() => setCreate(true)}>Create Recipe</li>
                    </ul>
                    <div className="divider"></div>
                    <div className="myrecipes-right">
                        { create ? 
                            <form className="recipe-form" onSubmit={handleSubmit}>
                                <div className="right-title">Create Recipe</div>
                                { submitted ?
                                <>
                                    <div className="recipe-made">Recipe Created!</div>
                                    <div className="standard-button recipe-button" onClick={resetForm}>Create New</div>
                                </>
                                :
                                <div className="recipe-form-wrapper">
                                    <div className="recipe-field">
                                        <label className="recipe-label">Recipe Name</label>
                                        <input type="text" className="recipe-input" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Recipe Name" required/>
                                    </div>
                                    <div className="recipe-field">
                                        <label className="recipe-label">Description</label>
                                        <textarea className="recipe-textarea recipe-desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
                                    </div>
                                    <div className="recipe-field">
                                        <label className="recipe-label">Ingredients</label>
                                        <textarea className="recipe-textarea" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required/>
                                    </div>
                                    <div className="recipe-field">
                                        <label className="recipe-label">Instructions</label>
                                        <textarea className="recipe-textarea" value={instructions} onChange={(e) => setInstructions(e.target.value)}  placeholder="Instructions" required/>
                                    </div>
                                    <div className="recipe-field">
                                        <label className="recipe-label">Cover Photo</label>
                                        <input type="file" className="recipe-input" onChange={(e) => setCoverPhoto(e.target.files[0])} />
                                    </div>
                                    <button className="standard-button recipe-button" type="submit">Create</button>
                                </div>
                                }       
                            </form>
                            :
                            <>
                                <div className="right-title">My Recipes</div>
                                { recipes.length === 0 ? 
                                    <h2>No Recipes Created!</h2> 
                                    :
                                    <div className="recipe-results">
                                        <RecipeDisplayer recipes={recipes}/>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyRecipes;