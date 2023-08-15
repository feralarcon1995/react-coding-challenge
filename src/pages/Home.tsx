import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useMovieContext } from "../context/MovieContext";

const Home = () => {
    const { loading } = useMovieContext();
    return (
        <main>

            <h2 className="w-full p-10 text-4xl	">Popular Titles</h2>
            <section className="fade grid justify-items-center grid-flow-row-dense xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  grid-rows-3 p-10 gap-10" >
                {loading ? <><Spinner /></> :
                    <>
                        <Link to="/series" className=" flex items-end max-w-sm rounded overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg h-80 font-bold text-xl mb-2 p-4 duration-150 hover:bg-gray-100 hover:scale-125" >
                            Popular Seriess
                        </Link>
                        <Link to="/movies" className=" flex items-end max-w-sm rounded overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg h-80 font-bold text-xl mb-2 p-4 duration-150 hover:bg-gray-100 hover:scale-125" >
                            Popular Movies
                        </Link>

                    </>}
            </section >

        </main>
    )
}

export default Home