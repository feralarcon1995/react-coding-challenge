import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MovieApp, Entry } from '../types/types';

interface MovieContextProps {
    entriesData: MovieApp;
    setEntriesData: React.Dispatch<React.SetStateAction<MovieApp>>;
    loading: boolean;
}
const MovieContext = createContext<MovieContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMovieContext debe usarse dentro de MovieContextProvider");
    }
    return context;
};
const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [entriesData, setEntriesData] = useState<MovieApp>({
        total: 0,
        entries: [],
    });
    const [loading, setLoading] = useState<boolean>(false);

    const handleEntries = () => {
        setLoading(true);
        fetch('./src/data/feed.json')
            .then(response => response.json())
            .then((data: { entries: Entry[] }) => {
                console.log(data.entries);
                const filteredData = data.entries.filter(entry => (
                    entry.releaseYear >= 2010
                ));

                const sortedData = filteredData.sort((a, b) => (
                    a.title.localeCompare(b.title)
                ));

                setEntriesData({ total: sortedData.length, entries: sortedData });
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            });
        setLoading(false);

    }


    useEffect(() => {
        handleEntries();
    }, []);

    return (
        <MovieContext.Provider value={{
            entriesData,
            setEntriesData,
            loading,
        }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;