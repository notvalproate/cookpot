import asyncHandler from 'express-async-handler';

import ApiError from '../utils/api.error.js';
import Recipe from '../models/recipe.model.js';

class RecipeHandler {
    static MAX_DISCOVER_RECIPES = 30;
    static IMAGE_BASE_URL = 'http://localhost:4000/images/';

    static createRecipe = asyncHandler(async (req, res) => {
        const createdBy = req.user.username;
        const recipeName = req.body.recipeName;
        const description = req.body.description;
        const ingredients = req.body.ingredients;
        const instructions = req.body.instructions;

        if (!recipeName || !description || !ingredients || !instructions) {
            throw new ApiError(400, 'All fields are required');
        }

        const recipeExists = await Recipe.findOne({
            createdBy: createdBy,
            recipeName: recipeName,
        });

        if (recipeExists) {
            throw new ApiError(400, 'Recipe already exists');
        }

        let coverPhoto = null;

        if (req.file) {
            coverPhoto = this.IMAGE_BASE_URL + req.file.filename;
        }

        const recipe = new Recipe({
            createdBy: createdBy,
            recipeName: recipeName,
            description: description,
            ingredients: ingredients,
            instructions: instructions,
            coverPhoto: coverPhoto,
        });
        await recipe.save();

        res.status(201).json({ message: 'Recipe created' });
    });

    static getRecipes = asyncHandler(async (req, res) => {
        const username = req.user.username;

        const recipes = await Recipe.find({ createdBy: username });

        res.status(200).json(recipes);
    });

    static getRecipeById = asyncHandler(async (req, res) => {
        const id = req.params.id;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new ApiError(400, 'Invalid recipe ID');
        }

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            throw new ApiError(404, 'Recipe not found');
        }

        res.status(200).json(recipe);
    });

    static discoverRecipes = asyncHandler(async (req, res) => {
        const recipeCount = await Recipe.countDocuments();

        if (recipeCount === 0) {
            throw new ApiError(404, 'No recipes found');
        }

        const recipes = await Recipe.aggregate([
            { $sample: { size: this.MAX_DISCOVER_RECIPES } },
        ]);

        res.status(200).json(recipes);
    });

    static searchRecipes = asyncHandler(async (req, res) => {
        const searchTerm = req.query.q;

        if (!searchTerm) {
            throw new ApiError(400, 'Search term is required');
        }

        const recipes = await Recipe.find({
            recipeName: { $regex: searchTerm, $options: 'i' },
        });

        res.status(200).json(recipes);
    });
}

Object.freeze(RecipeHandler);

export default RecipeHandler;
