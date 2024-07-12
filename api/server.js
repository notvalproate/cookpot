import express from 'express';
import bodyParser from 'body-parser';

import env from './utils/environment.js';

const app = express();

app.listen(env.app.port, async () => {
    console.log('Server running on http://localhost:' + env.app.port + '/');
})