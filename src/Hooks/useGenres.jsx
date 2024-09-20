const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return '';

  const GenresIDs = selectedGenres.map((g) => g.id);
  //return GenresIDs.reduce((acc, curr) => acc + "," + curr); //GenresIDs.join(","); this joins your array with 
  return GenresIDs.join(",");
};

export default useGenres;