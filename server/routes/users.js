import express from 'express';
import { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike } from '../controllers/user.js';
import { verifyToken } from '../jwt/verifyToken.js';
const router = express.Router();

// Update User
router.put('/:id', verifyToken, updateUser);

// Delete User
router.delete('/:id', verifyToken, deleteUser);

// Get a User
router.get('/find/:id', getUser);

// Subscribe User
router.put('/subscribe/:id', verifyToken, subscribe);

// Unsubscribe User
router.put('/unsubscribe/:id', verifyToken, unsubscribe);

// Like a Video
router.put('/like/:id', verifyToken, like);

// Dislike a Video
router.put('/dislike/:id', verifyToken, dislike);

export default router;
