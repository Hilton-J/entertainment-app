import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from './Spinner';
import Listing from './Listing';
import CustomPagination from './CustomPagination';

const Trending = () => {

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=${currentPage}`);
      console.log(data);
      setContent(data.results);
      setLoading(false);
    };
    fetchTrending();
  }, [currentPage]);


  return (
    <section className="py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <h2 className="text-4xl font-bold mb-5 text-center">TRENDING</h2>
          {loading ? (<Spinner />) : (<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
            {content.map((movie) => (
              <Listing key={movie.id} list={movie} type={movie.media_type === "tv" ? "TV Show" : "Movie"} />
            ))}
          </div>)}

          <CustomPagination setCurrentPage={setCurrentPage} />
        </div>

      </div>
    </section>
  )
}

export default Trending