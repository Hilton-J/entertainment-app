import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { IoStar } from 'react-icons/io5';

const Listing = ({ list, type }) => {

  let textColor;
  const rating = list.vote_average.toFixed(2);

  if (rating > 8)
    textColor = '#57e32c';
  else if (rating > 6)
    textColor = '#b7dd29';
  else if (rating > 4)
    textColor = '#ffe234';
  else if (rating > 2)
    textColor = '#ffa534';
  else
    textColor = '#ff4545';

  return (
    <div key={list.id} className='grid grid-rows-subgrid row-span-3 rounded-lg overflow-hidden shadow-xl relative h-full px-3 py-2 max-w-xs'>
      <Link to={`/${type}/${list.id}`} className='transition ease-in-out duration-700'>
        <img
          src={list.poster_path ?
            `https://image.tmdb.org/t/p/w300${list.poster_path}`
            :
            'https://www.movienewz.com/img/films/poster-holder.jpg'}
          alt={list.title || list.name}
          className=' object-cover rounded-lg size-full' />
      </Link>

      {/* ============ RATING DIV========== */}
      <div className='flex gap-1 items-center rounded-r-full px-3 py-1 text-xs font-semibold mr-2  absolute top-10 left-0 bg-slate-900 bg-opacity-[0.86]'
        style={{ color: textColor }}><IoStar />
        <span>
          {rating}
        </span>
      </div>
      {/* <div className="font-bold text-xl ">
        <Link to={`/${list.title}/${list.id}`} className='hover:text-blue-600'>{list.title || list.name}</Link>
      </div> */}
      <div className="flex flex-col justify-between">

        <span className="flex justify-between py-1 text-l font-semibold">
          {type === 'tv' ? 'TV Show' : 'Movie'}
          <span className="flex justify-between">
            {list.release_date || list.first_air_date}
          </span>
        </span>
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
  }).isRequired,
  type: PropTypes.string
};

export default Listing