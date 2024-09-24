import PropTypes from "prop-types";
import axios from "axios";
import { useEffect } from "react";
import { Chip } from "@mui/material";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setCurrentPage,
}) => {
  //FETCHES GENRES from the api
  useEffect(() => {
    const fetchGenres = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`,
      );
      // console.log(data);
      setGenres(data.genres);
    };
    fetchGenres();

    return () => {
      setGenres([]);
    };
  }, [setGenres, type]);

  const handleGenreSelect = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setCurrentPage(1);
  };

  const handleGenreRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id),
    );
    setGenres([...genres, genre]);
    setCurrentPage(1);
  };

  return (
    <div className="py-1 flex flex-wrap gap-2">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            size="small"
            label={genre.name}
            clickable
            color="primary"
            onDelete={() => handleGenreRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            size="small"
            label={genre.name}
            clickable
            onClick={() => handleGenreSelect(genre)}
          />
        ))}
    </div>
  );
};

Genres.propTypes = {
  type: PropTypes.string,
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  genres: PropTypes.array,
  setGenres: PropTypes.func,
  setCurrentPage: PropTypes.func,
};

export default Genres;
