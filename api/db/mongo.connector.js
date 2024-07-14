import mongoose from 'mongoose';

import env from '../utils/environment.js';

export default async function mongooseConnector() {
    mongoose
        .connect(env.mongo.uri, {
            dbName: 'cookpot',
        })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB', err);
        });
}
