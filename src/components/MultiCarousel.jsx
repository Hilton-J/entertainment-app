import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {/* {listCast.map((list, index) => (<div key={index} className='flex flex-col items-center w-40'>
          <div className='size-40 bg-red-400 rounded-full'>
            <img src={`https://image.tmdb.org/t/p/w300${list.profile_path}`} alt='' className='size-full rounded-full object-cover object-center' />
          </div>
          <p>{list.original_name}</p>
          <p className='text-center text-gray-600'>{list.character}</p>
        </div>))} */}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </>
  )
};

MultiCarousel.propTypes = {
  listCast: PropTypes.array
}

export default MultiCarousel