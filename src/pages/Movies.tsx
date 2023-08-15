import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useMovieContext } from "../context/MovieContext";

const Movies = () => {
  const { entriesData, loading } = useMovieContext();

  const moviesEntries = entriesData.entries.filter((entry) => entry.programType === 'movie');

  return (
    <>
      <h2 className="w-full p-10 text-4xl	">Popular Movies</h2>
      <section className="fade grid justify-items-center grid-flow-row-dense xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  grid-rows-3 p-10 gap-10" >
        {loading ? <><Spinner /></> :
          <>
            {moviesEntries.slice(0, 21).map((data) => (

              <div className="max-w-sm rounded overflow-hidden shadow-lg duration-150 hover:bg-gray-100" key={data.title}>
                <Link to={`${data.title}`}>
                  <img className="w-full" src={data.images["Poster Art"].url} alt={`Portada de ${data.title}`} />
                </Link>
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">{data.title}</h2>
                </div>
              </div>
            ))}
          </>}
      
      </section >

    </>
  );
};

export default Movies;
