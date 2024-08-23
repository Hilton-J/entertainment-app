import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { IoStar } from 'react-icons/io5';

const Listing = ({ list }) => {

  const rating = list.vote_average.toFixed(2);
  return (
    <div key={list.id} className="bg-white shadow-md overflow-hidden">
      <div className='grid grid-rows-[1fr_auto0] rounded-lg overflow-hidden shadow-lg bg-white relative h-full'>
        <Link to={`/${list.title}/${list.id}`}><img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={list.title} className=' w-full object-cover transform transition-transform hover:scale-105 ' /></Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{list.title || list.name}</div>
          <div className='flex gap-1 items-center rounded-r-full px-3 py-1 text-xs font-semibold text-green-700 mr-2  absolute top-10 left-0 bg-slate-900 opacity-[0.86]'><IoStar />
            <span>
              {rating}
            </span>
          </div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Release Date: {list.release_date || list.first_air_date}
          </span>
        </div>
      </div>
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
    first_air_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired
};

export default Listing