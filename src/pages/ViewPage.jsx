import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ViewPage = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`,
      );
      setItem(data);
    };

    fetchItem();
  }, [type, id]);

  const backgroundImageUrl = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
    : "https://www.movienewz.com/img/films/poster-holder.jpg";

  console.log(`url(${backgroundImageUrl})`);

  return (
    <section className="bg-blue-50 min-h-screen text-white">
      <div
        className="h-[30rem] relative container mx-auto rounded-b-2xl bg-black/30"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img
          src={item.backdrop_path ?
            `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
            :
            'https://www.movienewz.com/img/films/poster-holder.jpg'}
          alt={item.title || item.name}
          className=' object-cover rounded-lg w-full h-full' /> */}

        <div className="flex flex-wrap gap-5 w-full max-w-5xl p-10 top-0 h-full">
          <div className="flex justify-center">
            <div className="w-72 h-fit">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                    : "https://www.movienewz.com/img/films/poster-holder.jpg"
                }
                alt={item.title || item.name}
                className=" object-contain rounded-lg w-full h-full"
              />
            </div>

            <div className="flex flex-col w-full max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {item.name || item.original_title}
              </h1>
              <p className="text-xs text-justify">{item.overview}</p>
              <div className="text-xs">
                <p>
                  <strong>Country</strong>: {item.country}
                </p>
                <p>
                  <strong>Type</strong>: {type === "tv" ? "TV Show" : "Movie"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default ViewPage;
