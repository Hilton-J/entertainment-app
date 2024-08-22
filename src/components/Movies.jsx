import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Movies = () => {

  const [movieList, setMovieList] = useState([]);
  // const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

    const fetchMovies = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=5db68074253f9e17fefb439ca8ab3682';

      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovieList(data.results);
      } catch (error) {
        console.log('Error fetching data', error)
      }
    };
    fetchMovies();
  }, []);

  console.log(movieList);
  return (
    <section className=" h-screen">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3">
          <h2>LATEST MOVIES</h2>
          {movieList.map((movie) => (
            <div key={movie.id} className="bg-white shadow-md overflow-hidden h-full ">
              <div>
                <Link to={`/${movie.id}/${movie.title}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-full object-cover' /></Link>
              </div>
              <h4>{movie.title}</h4>
              <p>{moveBy.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Movies
