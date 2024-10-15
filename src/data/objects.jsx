export const filters = [
  {
    id: 'movies',
    name: 'Genres',
    genres: [],
    sort: [
      { value: 'polularity.asc', label: 'Popularity Ascending' },
      { value: 'polularity.desc', label: 'Popularity Descending' },
      { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
      { value: 'primary_release_date.desc', label: 'Release Date Descending' },
      { value: 'vote_average.asc', label: 'Rating Ascending' },
      { value: 'vote_average.desc', label: 'Rating Descending' },
      { value: 'title.asc', label: 'Title (A-Z)' },
      { value: 'title.desc', label: 'Title (Z-A)' },
    ],
  },
  {
    id: 'tv',
    name: 'Genres',
    genres: [],
    sort: [
      { value: 'polularity.asc', label: 'Popularity Ascending' },
      { value: 'polularity.desc', label: 'Popularity Descending' },
      { value: 'first_air_date.asc', label: 'First Air Date Ascending' },
      { value: 'first_air_date.desc', label: 'First Air Date Descending' },
      { value: 'vote_average.asc', label: 'Rating Ascending' },
      { value: 'vote_average.desc', label: 'Rating Descending' },
      { value: 'name.asc', label: 'Name (A-Z)' },
      { value: 'name.desc', label: 'Name (Z-A)' },
    ],
  },
]