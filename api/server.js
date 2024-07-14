import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import env from './utils/environment.js';
import mongooseConnector from './db/mongo.connector.js';

import errorHandler from './middleware/error.handler.js';

const app = express();
mongooseConnector();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

import authRoutes from './routes/auth.routes.js';
import recipeRoutes from './routes/recipe.routes.js';

app.use('/auth', authRoutes);
app.use('/recipe', recipeRoutes);

app.use(errorHandler);

app.listen(env.app.port, async () => {
    console.log('Server running on http://localhost:' + env.app.port + '/');
});
