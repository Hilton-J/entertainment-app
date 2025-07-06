import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import tvRouter from './routes/tvShowRoute.mjs';
import movieRouter from './routes/movieRoute.mjs';
import searchRouter from './routes/searchRoute.mjs';
import trendingRouter from './routes/trendingRoute.mjs';
import filterRouter from './routes/configurationRoute.mjs';

const app = express();
const port = process.env.PORT || 5000


//Middleware
// app.set("trust proxy", true);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Vercel!')
})

// Route to handle TMDB API requests
app.use('/api/tvshows', tvRouter);
app.use('/api/movies', movieRouter);
app.use('/api/search', searchRouter);
app.use('/api/filter', filterRouter);
app.use('/api/trending', trendingRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
