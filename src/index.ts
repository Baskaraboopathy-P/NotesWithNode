import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import compression from 'compression'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

export default app;