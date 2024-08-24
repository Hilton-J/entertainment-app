import { useState, useEffect } from "react";
import Listing from "../components/Listing";
import axios from 'axios';
import CustomPagination from "../components/CustomPagination";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);


  useEffect(() => {
    const fetchSearch = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`);
      console.log(data);
      setSearchList(data.results);
      setNumberOfPages(data.total_pages);
    };
    fetchSearch();
  }, [searchQuery, currentPage])

  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-full'>
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center">SEARCH FOR MOVIE / TV SHOW</h2>
          <input type="text" placeholder="Search" id="search" className="bg-transparent text-slate-800 border border-slate-800 focus:border-blue-600 focus:outline-none px-6 py-2 rounded-full text-sm md:text-base w-full mb-6" onChange={(e) => setSearchQuery(e.target.value)} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
            {searchList.map((movie) => (
              <Listing key={movie.id} list={movie} type={'Movie'} />
            ))}
          </div>
          {searchList.length > 1 && <CustomPagination setCurrentPage={setCurrentPage} numberOfPages={numberOfPages} />}
        </div>
      </div>
    </section>
  )
}

export default SearchPage