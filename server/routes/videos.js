import express from 'express';
import {
	addVideo,
	addView,
	deleteVideo,
	getVideo,
	random,
	subscribed,
	trend,
	updateVideo,
} from '../controllers/video.js';
import { verifyToken } from '../jwt/verifyToken.js';
const router = express.Router();

// Create a video
router.post('/', verifyToken, addVideo);

// Update a video
router.post('/:id', verifyToken, updateVideo);

// Delete a video
router.delete('/:id', verifyToken, deleteVideo);

// Get a video
router.get('/find/:id', getVideo);

// Increment views of the video
router.put('/view/:id', addView);

// Trend videos
router.get('/trend', trend);

// Random videos
router.get('/random', random);

// Subscibed
router.get('/sub', subscribed);

export default router;
