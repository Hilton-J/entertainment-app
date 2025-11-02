import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constant/env.const';

type Props = {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setToReleaseDate: React.Dispatch<React.SetStateAction<string>>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  setFromReleaseDate: React.Dispatch<React.SetStateAction<string>>;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = (props: Props) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data: genres } = await axios.get(`${BASE_URL}/movies/genre`);
        setGenres(genres.genres);
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div className="overflow-hidden rounded-lg bg-[#1C294A] p-3">
      <div className="flex-1">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="rounded-lg"
          onChange={(e) => props.setSearchQuery(e.target.value)}
        />
      </div>

      <div className="">
        <label
          htmlFor="my-modal-6"
          className="btn modal-button rounded-lg border border-transparent bg-blue-600 px-5 text-slate-900 transition-all duration-300 hover:border-blue-600 hover:bg-transparent hover:text-blue-600"
        ></label>
      </div>
    </div>
  );
};

export default Filter;
