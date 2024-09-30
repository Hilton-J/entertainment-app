import PropTypes from 'prop-types'


const Cast = ({ list }) => {


  return (
    <div className='flex flex-col items-center w-40'>
      <div className='size-40 bg-red-400 rounded-full'>
        <img src={`https://image.tmdb.org/t/p/w300${list.profile_path}`} alt='' className='size-full rounded-full object-cover object-center' />
      </div>
      <p>{list.original_name}</p>
      <p className='text-center text-gray-600'>{list.character}</p>
    </div>
  )
};

Cast.propType = {
  list: PropTypes.object
}

export default Cast