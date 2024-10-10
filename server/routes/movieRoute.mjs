import express from 'express'
import { MovieController } from '../controllers/movieController.mjs'
// import axios from 'axios'

const router = express.Router();

const controller = new MovieController();

router.get('/:page/:genres',
  controller.discoverMovies.bind(controller)
);
router.get('/:page',
  controller.discoverMovies1.bind(controller)
);
router.get('/genre',
  controller.movieGenres.bind(controller)
);


// router.get('/', async (req, res) => {
//   try {
//     const movies = await controller.discoverMovies({ params: { page: 1, genres: '' } }, res);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch movies' });
//   }
// });

// router.get('/',
//   async (req, res) => {

//     const { page } = req.params;
//     try {
//       const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}`);
//       console.log(data);
//       res.json(data);;
//     } catch (error) {
//       console.error('Error fetching trending data from TMDB:', error);
//       throw error;
//     }
//   }
// );



export default router;