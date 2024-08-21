export const getMovies = async () => {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=5db68074253f9e17fefb439ca8ab3682';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
};