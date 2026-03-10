import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]); 

import express from 'express';
import cors from 'cors';
import path from "path";
import 'dotenv/config'

import mailRouter from './route/mailroute.js'
import courseRouter from './route/courseRoute.js'
import feedbackRouter from './route/feedbackRoute.js'
import addressRouter from './route/addressRoute.js'
import placedRouter from './route/placedRoute.js'
import adminRouter from './route/adminroute.js'

import connectDB from './config/db.js'

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true
}));

await connectDB();

app.use('/api/user',mailRouter);
app.use('/api/course',courseRouter);
app.use('/api/feedback',feedbackRouter);
app.use('/api/address',addressRouter);
app.use('/api/placed',placedRouter);
app.use('/api/admin',adminRouter);


app.use(express.static(path.join(process.cwd(), "build")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log('server on port',PORT);
});