import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

import RecipeHandler from '../controllers/recipe.controller.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', RecipeHandler.getRecipes);
router.post('/', RecipeHandler.createRecipe);
router.get('/discover', RecipeHandler.discoverRecipes);

export default router;