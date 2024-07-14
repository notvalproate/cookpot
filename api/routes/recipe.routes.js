import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    console.log(req.user);
    res.status(200).json({ message: 'Protected route' });
});


export default router;