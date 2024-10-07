import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import trendingRouter from './routes/trendingRoute.mjs'

dotenv.config(); // Loads environment variables from .env file

const app = express();
const port = process.env.PORT || 5000
const BASE_URL = 'https://api.themoviedb.org/3';

const apiKey = process.env.TMDB_API_KEY;

//Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing for the frontend
app.use(express.json());


// Route to handle TMDB API requests
app.get('/api/:type/:id', async (req, res) => {
  const { type, id } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`
    );
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.get('/api/:type/:id/credits', async (req, res) => {
  const { type, id } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`
    );
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.use('/api/trending', trendingRouter);

// app.get('/api/trending', async (req, res) => {
//   try {
//     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching trending data: ', error);
//     res.status(500).send('Error fetching trending data');
//   }
// });

app.get('/api/movie', async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${apiKey}`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching trending data: ', error);
    res.status(500).send('Error fetching trending data');
  }
});

app.get('/api/discover/movie', async (req, res) => {
  const { page, with_genres } = req.query;

  try {
    const { data } = await axios.get(`${BASE_URL}/discover/movie?api_key=${apiKey}&include_adult=false&page=${page}&with_genres=${with_genres}`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching trending data: ', error);
    res.status(500).send('Error fetching trending data');
  }
});

app.get('/api/search/movie', async (req, res) => {
  const { query, page } = req.query;

  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching trending data: ', error);
    res.status(500).send('Error fetching trending data');
  }
});


app.get('/api/tv', async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching trending data: ', error);
    res.status(500).send('Error fetching trending data');
  }
});




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
