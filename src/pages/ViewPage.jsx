import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const ViewPage = () => {
  const { type, id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
      const apiKey = import.meta.env.VITE_API_KEY
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`,
      )
      setItem(data)
    }

    fetchItem()
  }, [type, id])

  const backgroundImageUrl = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
    : 'https://www.movienewz.com/img/films/poster-holder.jpg'

  console.log(`url(${backgroundImageUrl})`)

  return (
    <section className="min-h-screen bg-blue-50 text-white">
      <div
        className="container relative mx-auto h-[30rem] rounded-b-2xl bg-black/30"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <img
          src={item.backdrop_path ?
            `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
            :
            'https://www.movienewz.com/img/films/poster-holder.jpg'}
          alt={item.title || item.name}
          className=' object-cover rounded-lg w-full h-full' /> */}

        <div className="top-0 flex h-full w-full max-w-5xl flex-wrap gap-5 p-10">
          <div className="flex justify-center">
            <div className="h-fit w-72">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                    : 'https://www.movienewz.com/img/films/poster-holder.jpg'
                }
                alt={item.title || item.name}
                className="h-full w-full rounded-lg object-contain"
              />
            </div>

            <div className="flex w-full max-w-lg flex-col">
              <h1 className="mb-6 text-3xl font-bold md:text-4xl">
                {item.name || item.original_title}
              </h1>
              <p className="text-justify text-xs">{item.overview}</p>
              <div className="text-xs">
                <p>
                  <strong>Country</strong>: {item.country}
                </p>
                <p>
                  <strong>Type</strong>: {type === 'tv' ? 'TV Show' : 'Movie'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
}

export default ViewPage
