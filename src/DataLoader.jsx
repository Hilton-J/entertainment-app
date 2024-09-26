import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY
export const getMovies = async () => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error =>
      console.error('Error fetching data:', error)
    );
  console.log(data);
  return data
}

export const getGenres = async (type) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`,
  )

  return data
}
