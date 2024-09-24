import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
// import { useState, useRef } from 'react';

const Listing = ({ list, type }) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const cardRef = useRef(null);

  // const handleMouseEnter = () => setIsHovered(true);

  // const handleMouseLeave = () => setIsHovered(false);

  // const handleMouseMove = (e) => {
  //   if (isHovered) {
  //     const card = cardRef.current;
  //     const rect = card.getBoundingClientRect();

  //     const x = e.nativeEvent.offsetX; // Offset for positioning at bottom right
  //     const y = e.nativeEvent.offsetY; // Offset for positioning at bottom right

  //     console.log(x, y);
  //     card.style.left = `${x}px`;
  //     card.style.top = `${y}px`;
  //   }
  // }

  let textColor
  const rating = list.vote_average.toFixed(2)

  if (rating > 8) textColor = '#57e32c'
  else if (rating > 6) textColor = '#b7dd29'
  else if (rating > 4) textColor = '#ffe234'
  else if (rating > 2) textColor = '#ffa534'
  else textColor = '#ff4545'

  return (
    <div
      key={list.id}
      className="h-full max-w-xs overflow-hidden rounded-lg shadow-2xl"
    >
      <div className="relative">
        <Link
          to={`/${type}/${list.id}`}
          className="transition duration-700 ease-in-out"
        >
          <img
            src={
              list.poster_path
                ? `https://image.tmdb.org/t/p/w300${list.poster_path}`
                : 'https://www.movienewz.com/img/films/poster-holder.jpg'
            }
            alt={list.title || list.name}
            className="size-full rounded-lg object-cover"
          />
        </Link>

        <div
          className="absolute left-0 top-5 mr-2 flex items-center gap-1 rounded-r-full bg-slate-900 bg-opacity-[0.86] px-3 py-1 text-xs font-semibold"
          style={{ color: textColor }}
        >
          <IoStar />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  )
}

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
  type: PropTypes.string,
}

export default Listing

{
  /* {isHovered && <div
        ref={cardRef}
        className="absolute p-4 bg-white rounded-lg shadow-lg z-50 w-80 h-20"
        style={{ transform: 'translate(20px, 20px)' }}
      >
        <h3 className="text-lg font-bold">{list.title || list.name}</h3>
        <p>{list.overview}</p>
      </div>} */
}

{
  /* ============ RATING DIV========== */
}

{
  /* <div className="flex flex-col justify-between">
        <span className="flex justify-between py-1 text-l font-semibold">
          {type === 'tv' ? 'TV Show' : 'Movie'}
          <span className="flex justify-between">
            {list.release_date || list.first_air_date}
          </span>
        </span>
      </div> */
}
