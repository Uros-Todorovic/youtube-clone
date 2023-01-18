import express from 'express';
import { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike } from '../controllers/user.js';
import { verifyToken } from '../jwt/verifyToken.js';
const router = express.Router();

// Update User
router.put('/:id', verifyToken, updateUser);

// Delete User
router.delete('/:id', deleteUser);

// Get a User
router.get('/find/:id', getUser);

// Subscribe User
router.put('/subscribe/:id', subscribe);

// Unsubscribe User
router.put('/unsubscribe/:id', unsubscribe);

// Like a Video
router.put('/like/:id', like);

// Dislike a Video
router.put('/dislike/:id', dislike);

export default router;
