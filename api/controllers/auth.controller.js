import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import ApiError from "../utils/api.error.js";
import User from '../models/user.model.js';
import env from "../utils/environment.js";

class AuthHandler {
    static signup = asyncHandler(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password) {
            throw new ApiError(400, 'Username and password required');
        }

        const userExists = await User.exists({ username: username });

        if (userExists) {
            throw new ApiError(409, 'Username already exists');
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        
        const user = new User({ username: username, password: hashedPassword, });
        await user.save();


        const token = jwt.sign({ username: username }, env.jwt.secret, { expiresIn: env.jwt.expiry });

        res.cookie('authToken', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 * 4 * 3 });

        res.status(201).json({ message: 'User created', username: username });
    });

    static login = asyncHandler(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password) {
            throw new ApiError(400, 'Username and password required');
        }

        const user = await User.findOne({ username: username });

        if (!user) {
            throw new ApiError(401, 'Invalid credentials');
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
            throw new ApiError(401, 'Invalid credentials');
        }

        const token = jwt.sign({ username: username }, env.jwt.secret, { expiresIn: env.jwt.expiry });

        res.cookie('authToken', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 * 4 * 3 });

        res.status(200).json({ message: 'Login successful', username: username });
    });

    static logout = asyncHandler(async (req, res) => {
        res.clearCookie('authToken', { httpOnly: true });

        res.status(204).send();
    });
};

Object.freeze(AuthHandler);

export default AuthHandler;