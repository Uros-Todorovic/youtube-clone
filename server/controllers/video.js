import { createError } from '../errors/error.js';
import Video from '../models/Video.js';

export const addVideo = async (req, res, next) => {
	const newVideo = new Video({ userId: req.user.id, ...req.body });
	try {
		const saveVideo = await newVideo.save();
		res.status(200).json(saveVideo);
	} catch (error) {
		next(error);
	}
};

export const updateVideo = async (req, res, next) => {
	try {
		const video = await Video.findById(req.params.id);
		if (!video) return next(createError(404, 'Video not found'));

		if (req.user.id === video.userId) {
			const updatedVideo = await Video.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedVideo);
		} else {
			return next(createError(403, 'Unauthorized attempt! Your ip adress has been reported.'));
		}
	} catch (error) {
		next(error);
	}
};

export const deleteVideo = async (req, res, next) => {
	try {
		const video = await Video.findById(req.params.id);
		if (!video) return next(createError(404, 'Video not found'));

		if (req.user.id === video.userId) {
			await Video.findByIdAndDelete(req.params.id);
			res.status(200).json('Video has been deleted successfully.');
		} else {
			return next(createError(403, 'Unauthorized attempt! Your ip adress has been reported.'));
		}
	} catch (error) {
		next(error);
	}
};

export const getVideo = async (req, res, next) => {
	try {
		const video = await Video.findById(req.params.id);
		res.status(200).json(video);
	} catch (error) {
		next(error);
	}
};

export const addView = async (req, res, next) => {
	try {
		res.status(200).json(video);
	} catch (error) {
		next(error);
	}
};

export const random = async (req, res, next) => {
	try {
		res.status(200).json(video);
	} catch (error) {
		next(error);
	}
};

export const trend = async (req, res, next) => {
	try {
		res.status(200).json(video);
	} catch (error) {
		next(error);
	}
};

export const subscribed = async (req, res, next) => {
	try {
		res.status(200).json(video);
	} catch (error) {
		next(error);
	}
};
