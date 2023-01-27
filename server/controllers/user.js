import { createError } from '../errors/error.js';
import User from '../models/User.js';

export const updateUser = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (error) {
			next(error);
		}
	} else {
		return next(createError(403, 'Unauthorized attempt! Your ip adress has been reported.'));
	}
};

export const deleteUser = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json('User has been deleted');
		} catch (error) {
			next(error);
		}
	} else {
		return next(createError(403, 'Unauthorized attempt! Your ip adress has been reported.'));
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

export const subscribe = async (req, res, next) => {
	await User.findById(req.user.id, {
		$push: { subscribedUsers: req.params.id },
	});
	await User.findByIdAndUpdate(req.params.id, {
		$inc: { subscribers: 1 },
	});
	res.status(200).josn('Subsrciption successfull.');
	try {
	} catch (error) {
		next(error);
	}
};

export const unsubscribe = async (req, res, next) => {
	await User.findById(req.user.id, {
		$pull: { subscribedUsers: req.params.id },
	});
	await User.findByIdAndUpdate(req.params.id, {
		$inc: { subscribers: -1 },
	});
	res.status(200).josn('Unsubsrciption successfull.');
	try {
	} catch (error) {
		next(error);
	}
};

export const like = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

export const dislike = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
