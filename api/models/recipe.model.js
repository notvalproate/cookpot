import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        required: true,
    },
    recipeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    coverPhoto: {
        type: String,
    },
});

export default mongoose.model('recipes', recipeSchema);
