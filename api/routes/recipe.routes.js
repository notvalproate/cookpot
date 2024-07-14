import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

import RecipeHandler from '../controllers/recipe.controller.js';

const router = express.Router();

router.get('/', authMiddleware, RecipeHandler.getRecipes);
router.get('/id/:id', RecipeHandler.getRecipeById);
router.post('/', authMiddleware, RecipeHandler.createRecipe);
router.get('/discover', RecipeHandler.discoverRecipes);
router.get('/search', RecipeHandler.searchRecipes);

export default router;