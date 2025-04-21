import 'dotenv/config';
import express from 'express';
// import axios from 'axios';
import cors from 'cors';
// import dotenv from 'dotenv';
import trendingRouter from './routes/trendingRoute.mjs'
import movieRouter from './routes/movieRoute.mjs'
import tvRouter from './routes/tvShowRoute.mjs'
import searchRouter from './routes/searchRoute.mjs'
import filterRouter from './routes/configurationRoute.mjs'

const app = express();
const port = process.env.PORT || 5000


//Middleware
// app.set("trust proxy", true);
app.use(cors());
app.use(express.json());

// Route to handle TMDB API requests
app.use('/api/trending', trendingRouter); // This mounts trending router to the app. /api/trending is my entry point to the router or rather a baseURL to trending router endpoints
app.use('/api/movie', movieRouter);
app.use('/api/tvshow', tvRouter);
app.use('/api/search', searchRouter);
app.use('/api/filter', filterRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
