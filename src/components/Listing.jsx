import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Listing = ({ list }) => {
  // const average = list.vote_average;
  return (
    <div key={list.id} className="bg-white shadow-md overflow-hidden h-full grid-cols-subgrid relative">
      <div className='h-full'>
        <Link to={`/${list.title}/${list.id}`}><img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={list.title} className='h-full w-full object-cover ' /></Link>
      </div>

      {/* <div>{average.toFixed(2)}</div> */}
      {/* <div className='flex justify-between items-center p-[0.5rem]'>
        <h3>{list.title ? list.title : list.name}</h3>
        <span>{list.popularity}</span>
      </div>
      <div className='absolute left-0 right-0 bottom-0 bg-slate-400 hidden'>
        <h3>{list.overview}</h3>
      </div> */}
    </div>
  )
};

Listing.propTypes = {
  list: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    name: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number
  }).isRequired
};

export default Listing