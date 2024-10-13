import PropTypes from 'prop-types'
import React from 'react'

const Cast = ({ list, title }) => {

  return (
    <div className='text-black container mx-auto'>
      <h3 className='text-2xl mb-5'>Cast of {title}</h3>
      <div className='carousel-container'>
        <ul className='flex gap-4 overflow-x-auto snap-mandatory snap-x'>
          {list.map((casts, index) => (
            <li key={index} className='flex flex-col items-center w-40'>
              <div className='size-40 bg-red-400 rounded-full'>
                <img src={`https://image.tmdb.org/t/p/w300${casts.profile_path}`} alt='' className='size-full rounded-full object-cover object-center' />
              </div>
              <p className='text-center'>{casts.original_name}</p>
              <p className='text-center text-gray-600 '>{casts.character}</p>
            </li>
          ))}
          {/* <MultiCarousel /> */}
        </ul>
      </div>
    </div>
  )
};

Cast.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string
}

export default Cast