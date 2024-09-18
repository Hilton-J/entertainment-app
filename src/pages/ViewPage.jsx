import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'

const ViewPage = () => {

  const { type, id } = useParams();
  console.log(type, id);

  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`);
      setItem(data);
    };

    fetchItem();
  }, [type, id])

  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='container m-auto flex justify-center'>
        <div className='grid md:grid-cols-2 gap-10 w-full max-w-2xl mt-5 p-10'>
          <div className='flex-shrink-0 w-72 h-auto'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full objet-cover' />
          </div>
          <div className='flex flex-col gap-4 max-w-lg'>
            <h1 className='text-4xl font-bold mb-6'>{item.title}</h1>
            <p className='text-xs text-justify'>{item.description}</p>
            <div className='text-xs'>
              <p><strong>Country</strong>: {item.country}</p>
              {/* <p><strong>Genre</strong>: {genre || 'N/A'}</p>
              <p><strong>Year</strong>: {year}</p> */}
              <p><strong>Type</strong>: {item.type}</p>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex justify-end'>
                <Link to={`/edit/${item.type}/${item.id}`} className='bg-color text-white py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]' >EDIT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func
};

export default ViewPage