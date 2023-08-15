import { Link, useParams } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const EntriesDetail = () => {
    const { title } = useParams<{ title: string }>();
    const { entriesData } = useMovieContext();

    const entry = entriesData.entries.find((entry) => entry.title === title);

    if (!entry) {
        return <div className="flex justify-center items-center min-h-screen max-h-full"><h2>Ups hubo un error intente de nuevo.</h2></div>;
    }

    return (
        <>

            <nav className=" fade flex p-10" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="uppercase inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                            <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link to={`/${entry.programType}`} className="uppercase ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 ">{entry.programType}</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="uppercase ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{entry.title}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="fade md:p-10 p-3 flex justify-center items-center min-h-screen max-h-full flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:w-1/2">
                    <img src={entry.images["Poster Art"].url} alt={`Portada de ${entry.title}`} className="w-full h-auto md:h-full" />
                </div>

                <div className="md:w-1/2 md:p-10 p-3">
                    <h2 className="text-4xl font-semibold mb-2">{entry.title}</h2>
                    <p className="text-gray-700 mb-4 text-xl">{entry.description}</p>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 uppercase"> Year: {entry.releaseYear} - Type:{entry.programType}</span>
                </div>
            </div>

        </>

    );
};

export default EntriesDetail;
