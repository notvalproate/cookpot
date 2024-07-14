import express from 'express';
import path from 'path';

import authMiddleware from '../middleware/auth.middleware.js';
import RecipeHandler from '../controllers/recipe.controller.js';

const router = express.Router();

import multer from 'multer';

const storage = multer.diskStorage({
    destination: 'images/',
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploadImage = multer({ storage: storage });

router.get('/', authMiddleware, RecipeHandler.getRecipes);
router.get('/id/:id', RecipeHandler.getRecipeById);
router.post('/', authMiddleware, uploadImage.single('coverPhoto'), RecipeHandler.createRecipe);
router.get('/discover', RecipeHandler.discoverRecipes);
router.get('/search', RecipeHandler.searchRecipes);

export default router;