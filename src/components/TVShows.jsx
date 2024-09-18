// import PropTypes from 'prop-types';
import axios from 'axios'
import { useEffect, useState } from "react";
import Listing from './Listing';
import Spinner from './Spinner';
import Genres from './Genres';
import useGenres from '../Hooks/useGenres';
import Paginate from './Paginate';

const TVShows = () => {


  const [tvShowList, setTVShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreURL = useGenres(selectedGenres);

  console.log(genreURL);


  useEffect(() => {
    const fetchTVShows = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=${currentPage}&with_genres=${genreURL}`);
      console.log(data);
      setTVShowList(data.results);
      setLoading(false);
    };
    fetchTVShows();
  }, [currentPage, genreURL]);


  // useEffect(() => {
  //   const fetchAllTVShows = async () => {
  //     let allShows = [];
  //     let page = currentPage;
  //     let totalPages = 10;

  //     while (page <= totalPages) {
  //       const apiKey = import.meta.env.VITE_API_KEY;
  //       const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=${page}`;

  //       try {
  //         const res = await fetch(url);
  //         const data = await res.json();

  //         allShows = [...allShows, ...data.results];
  //         totalPages = 100;
  //         page++;
  //       } catch (error) {
  //         console.log('Error fetching data', error);
  //         break;
  //       }
  //     };

  //     const limited = isHome ? allShows.slice(0, 6) : allShows;
  //     setTVShowList(limited);
  //     setLoading(false);
  //   };

  //   fetchAllTVShows();
  // }, [isHome]);

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center">LATEST TV SHOWS</h2>
          <Genres
            type='tv'
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setCurrentPage={setCurrentPage}
          />

          {loading ? (<Spinner />) : (<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
            {tvShowList.map((tvShow) => (
              <Listing key={tvShow.id} list={tvShow} type={'TV Show'} />
            ))}
          </div>)}
          <Paginate setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </section>
  )
};

export default TVShows;
