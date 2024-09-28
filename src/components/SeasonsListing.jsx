import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SeasonsListing = ({ list }) => {

  return (
    <div
      key={list.id}
      className=" w-fit overflow-hidden rounded-lg"
    >
      <img
        src={
          list.poster_path
            ? `https://image.tmdb.org/t/p/w300${list.poster_path}`
            : 'https://www.movienewz.com/img/films/poster-holder.jpg'
        }
        alt={list.title || list.name}
        className="max-h-60 w-full rounded-lg object-fit"
      />
      <p>{list.name}</p>
      <p>{list.episode_count} Episodes</p>
    </div>
  )
}

SeasonsListing.propTypes = {
  list: PropTypes.shape({
    air_date: PropTypes.string,
    episode_count: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    season_number: PropTypes.number,
    vote_average: PropTypes.number,
  }).isRequired,
}

export default SeasonsListing