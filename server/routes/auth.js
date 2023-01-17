import express from 'express';
import { signin, signup } from '../controllers/auth.js';
const router = express.Router();

// Create a user with
router.post('/signup', signup);

// Sign in
router.post('/signin', signin);

// Google Auth
router.post('/google');

export default router;
