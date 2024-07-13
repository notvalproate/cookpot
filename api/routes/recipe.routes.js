import express from 'express';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.use(authMiddleware);




export default router;