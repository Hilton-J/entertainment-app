import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

const SeasonsListing = ({ list, numSeason }) => {

  return (
    <div className='text-black container mx-auto'>
      <h3 className='text-2xl mb-5'>{numSeason}
        {numSeason > 1 ? ' Seasons' : ' Season'}</h3>

      <ul className='flex gap-10 overflow-x-auto snap-mandatory snap-x'>
        {list.map((season, index) => (
          <li key={index} className="flex flex-col w-40 shrink-0">
            <img
              src={
                season.poster_path
                  ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                  : 'https://www.movienewz.com/img/films/poster-holder.jpg'
              }
              alt={season.title || season.name}
              className="rounded-lg object-fit object-cover size-full "
            />
            <p className=''>{season.name}</p>
            <p className='mt-auto'>{season.episode_count} Episodes</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

SeasonsListing.propTypes = {
  list: PropTypes.array,
  numSeason: PropTypes.number
};

export default SeasonsListing