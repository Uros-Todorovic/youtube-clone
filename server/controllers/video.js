import { createError } from '../errors/error.js';
import User from '../models/User.js';
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
	await Video.findByIdAndUpdate(req.params.id, {
		$inc: { views: 1 },
	});
	try {
		res.status(200).json('The view has been increased.');
	} catch (error) {
		next(error);
	}
};

export const random = async (req, res, next) => {
	const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
	try {
		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};

export const trend = async (req, res, next) => {
	const videos = await Video.find().sort({ views: -1 });
	try {
		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};

export const subscribed = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		const subscribedChannels = user.subscribedUsers;

		const list = await Promise.all(
			subscribedChannels.map((channelId) => {
				return Video.find({ userId: channelId });
			})
		);

		res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
	} catch (error) {
		next(error);
	}
};

export const getByTag = async (req, res, next) => {
	const tags = req.query.tags.split(',');
	const videos = await Video.find({ tags: { $in: tags } }).limit(20);
	try {
		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};

export const getByTitle = async (req, res, next) => {
	const query = req.query.q;
	const videos = await Video.find({ title: { $regex: query, $options: 'i' } }).limit(40);
	try {
		res.status(200).json(videos);
	} catch (error) {
		next(error);
	}
};
