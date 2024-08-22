import Movies from '../components/Movies'
import TVShows from '../components/TVShows'

const HomePage = () => {
  return (
    <>
      <Movies isHome={true} />
      <TVShows isHome={true} />
    </>
  )
}

export default HomePage