import express from 'express';
import { test } from '../controllers/auth.js';
const router = express.Router();

// Create a user with
router.post('/signup');

// Sign in
router.post('/signin');

// Google Auth
router.post('/google');

export default router;
