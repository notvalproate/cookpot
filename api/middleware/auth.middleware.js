import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

import ApiError from '../utils/api.error.js';
import env from '../utils/environment.js';

const authMiddleware = asyncHandler((req, res, next) => {
    const token = req.cookies.authToken;

    if (!token) {
        throw new ApiError(401, 'Unauthorized, Please login or signup first!');
    }

    try {
        const decoded = jwt.verify(token, env.jwt.secret);
        req.user = decoded;
        next();
    } catch (err) {
        throw new ApiError(401, 'Unauthorized, Please login or signup first!');
    }
});

export default authMiddleware;
