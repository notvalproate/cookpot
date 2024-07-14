import express from 'express';
import AuthHandler from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/status', (req, res) => {
    res.status(200).json({ message: 'OK' });
});
router.post('/login', AuthHandler.login);
router.post('/signup', AuthHandler.signup);
router.delete('/logout', AuthHandler.logout);

export default router;