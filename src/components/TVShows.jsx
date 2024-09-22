// import PropTypes from 'prop-types';
import axios from 'axios'
import { useContext, useEffect, useState } from "react";
import Listing from './Listing';
import Spinner from './Spinner';
import Genres from './Genres';
import useGenres from '../Hooks/useGenres';
import Paginate from './Paginate';
import FilterProvider from './FilterProvider';
import { GenreContext } from '../contexts/GenreContext';

const TVShows = () => {

  const { selectedGenres } = useContext(GenreContext);
  const [tvShowList, setTVShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  // const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreURL = useGenres(selectedGenres);

  console.log(genreURL);


  useEffect(() => {
    const fetchTVShows = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=${currentPage}&with_genres=${genreURL}&query=${searchQuery}`);
      console.log(data);
      setTVShowList(data.results);
      setLoading(false);
    };
    fetchTVShows();
  }, [currentPage, genreURL]);


  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center">LATEST TV SHOWS</h2>
          {/* <Genres
            type='tv'
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setCurrentPage={setCurrentPage}
          /> */}

          {loading ? (<Spinner />) : (
            <FilterProvider type={'tv'} setSearchQuery={setSearchQuery}>
              {tvShowList.map((tvShow) => (
                <Listing key={tvShow.id} list={tvShow} type={'TV Show'} />
              ))}
            </FilterProvider>
          )}
          <Paginate setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </section>
  )
};

export default TVShows;
