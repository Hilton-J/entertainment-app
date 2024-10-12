import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import trendingRouter from './routes/trendingRoute.mjs'
import movieRouter from './routes/movieRoute.mjs'
import tvRouter from './routes/tvShowRoute.mjs'
import searchRouter from './routes/searchRoute.mjs'

dotenv.config(); // Loads environment variables from .env file

const app = express();
const port = process.env.PORT || 5000
const BASE_URL = process.env.TMDB_API_KEY;;
const apiKey = process.env.TMDB_API_KEY;

//Middleware
app.use(cors());
app.use(express.json());


// Route to handle TMDB API requests
app.use('/api/trending', trendingRouter); // This mounts trending router to the app. /api/trending is my entry point to the router, like a baseURL
app.use('/api/movie', movieRouter);
app.use('/api/tvshow', tvRouter);
app.use('/api/search', searchRouter);

app.get('/api/:type/:id', async (req, res) => {
  const { type, id } = req.params;
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/${id}?api_key=${apiKey}&language=en-US`
    );
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// app.get('/api/tv', async (req, res) => {
//   try {
//     const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`);
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching trending data: ', error);
//     res.status(500).send('Error fetching trending data');
//   }
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
