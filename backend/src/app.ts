import express, { type Request, type Response } from 'express';
import { config } from 'dotenv';
import { connectDB } from './config/db.js';


config();

export const app = express();

connectDB();
app.set('port', process.env.PORT || 8000);
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());