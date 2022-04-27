import express from 'express';
import userRouter from './routes/userRoutes.js';
import helmet from 'helmet'
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoSanitize from 'express-mongo-sanitize';
import connectDB from './config/db.js';

connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());

app.use('/user', userRouter);

export default app;