import PropTypes from 'prop-types'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/bundle'
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
// import { Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = ({ list }) => {
  // const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   setSwiperRef([
  //     '<div class="text-center text-lg bg-white flex justify-center items-center">Slide ' + --prependNumber + '</div>',
  //     '<div class="text-center text-lg bg-white flex justify-center items-center">Slide ' + --prependNumber + '</div>',
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="text-center text-lg bg-white flex justify-center items-center">Slide ' + --prependNumber + '</div>'
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="text-center text-lg bg-white flex justify-center items-center">Slide ' + ++appendNumber + '</div>'
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="text-center text-lg bg-white flex justify-center items-center">Slide ' + ++appendNumber + '</div>',
  //     '<div class="text-center text-lg bg-white flex justify-center items-center">Slide ' + ++appendNumber + '</div>',
  //   ]);
  // };

  return (
    <>
      <Swiper
      // onSwiper={setSwiperRef}
      // slidesPerView={3}
      // centeredSlides={true}
      // spaceBetween={30}
      // pagination={{
      //   type: 'fraction',
      // }}
      // navigation={true}
      // modules={[Pagination, Navigation]}
      // className=" "
      >
        {
          list.map((lists) => {
            return (<SwiperSlide key={lists.id} className='flex flex-col items-center w-40'>
              <div className='size-40 bg-red-400 rounded-full'>
                <img src={`https://image.tmdb.org/t/p/w300${lists.profile_path}`} alt='' className='size-full rounded-full object-cover object-center' />
              </div>
              <p>{lists.original_name}</p>
              <p className='text-center text-gray-600'>{lists.character}</p>
            </SwiperSlide>)
          })
        }
        {/* <SwiperSlide className='bg-red-700'>Slide 1</SwiperSlide>
<SwiperSlide className='bg-red-700'>Slide 2</SwiperSlide>
<SwiperSlide className='bg-red-700'>Slide 3</SwiperSlide>
<SwiperSlide className='bg-red-700'>Slide 4</SwiperSlide> */}
      </Swiper>

      {/* <p className="text-center mt-5 flex gap-3 justify-center">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
  );
}
// import PropTypes from 'prop-types'
// import { Carousel } from 'react-responsive-carousel'
// //import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const Swiper = ({ list }) => {
//   return (
//     <Carousel className='h-[50vh] border-2 border-green-500 gap-5 w-full'
//       // axis='vertical'
//       autoFocus={true}
//       showThumbs={false}
//       thumbWidth='fit'
//     // renderItems={}
//     >
//       {list.map((lists) => (<div key={lists.id} className='flex flex-col items-center w-40'>
//         <div className='size-40 bg-red-400 rounded-full'>
//           <img src={`https://image.tmdb.org/t/p/w300${lists.profile_path}`} alt='' className='size-full rounded-full object-cover object-center' />
//         </div>
//         <p>{lists.original_name}</p>
//         <p className='text-center text-gray-600'>{lists.character}</p>
//       </div>))}
//     </Carousel>
//   )
// };

SwiperComponent.propType = {
  list: PropTypes.object
}

export default SwiperComponent
