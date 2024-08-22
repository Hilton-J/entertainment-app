import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import Listing from './Listing'

const TVShows = ({ isHome = false }) => {

  const [tvShowList, setTVShowList] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      const url = 'https://api.themoviedb.org/3/discover/tv?api_key=5db68074253f9e17fefb439ca8ab3682';

      try {
        const res = await fetch(url);
        const data = await res.json();
        const limited = (isHome ? data.results.slice(0, 8) : data.results);
        console.log(limited);
        setTVShowList(limited);
      } catch (error) {
        console.log('Error fetching data', error)
      }
    };
    fetchMovies();
  }, [isHome]);


  return (
    <section className=" ">
      <div className="container m-auto">
        <>
          <h2>LATEST TV SHOWS</h2>
          <div className="grid grid-cols-4 gap-3">
            {tvShowList.map((tvShow) => (
              <Listing key={tvShow.id} list={tvShow} />
            ))}
          </div>
        </>
      </div>
    </section>
  )
};

TVShows.propTypes = {
  isHome: PropTypes.bool
};

export default TVShows