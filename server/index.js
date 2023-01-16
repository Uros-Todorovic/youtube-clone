import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const connect = () => {
	mongoose
		.connect(process.env.MONGO_DB)
		.then(() => {
			console.log('Connected to mongoDB');
		})
		.catch((err) => {
			throw err;
		});
};

app.listen(8800, () => {
	console.log('Server is listening on port 8800');
	connect();
});
