import asyncHandler from "express-async-handler";

import ApiError from "../utils/api.error.js";
import Recipe from '../models/recipe.model.js';

class RecipeHandler {
    static MAX_DISCOVER_RECIPES = 30;

    static createRecipe = asyncHandler(async (req, res) => {
        const createdBy = req.user.username;
        const recipeName = req.body.recipeName;
        const description = req.body.description;
        const ingredients = req.body.ingredients;
        const instructions = req.body.instructions;

        if(!recipeName || !description || !ingredients || !instructions) {
            throw new ApiError(400, 'All fields are required');
        }

        const recipeExists = await Recipe.findOne({ 
            createdBy: createdBy, 
            recipeName: recipeName,
        });

        if(recipeExists) {
            throw new ApiError(400, 'Recipe already exists');
        }

        const recipe = new Recipe({
            createdBy: createdBy,
            recipeName: recipeName,
            description: description,
            ingredients: ingredients,
            instructions: instructions,
        });
        await recipe.save();

        res.status(201).json({ message: 'Recipe created' });
    });

    static getRecipes = asyncHandler(async (req, res) => {
        const username = req.user.username;

        const recipes = await Recipe.find({ createdBy: username });

        res.status(200).json(recipes);
    });

    static discoverRecipes = asyncHandler(async (req, res) => {
        const recipeCount = await Recipe.countDocuments();

        if(recipeCount === 0) {
            throw new ApiError(404, 'No recipes found');
        }

        const recipes = await Recipe.aggregate([{ $sample: { size: this.MAX_DISCOVER_RECIPES } }]);

        res.status(200).json(recipes);
    });
};

Object.freeze(RecipeHandler);

export default RecipeHandler;