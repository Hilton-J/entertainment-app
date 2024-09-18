import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=api_key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getGenres = async (type) => {

  const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`);

  return data;
}