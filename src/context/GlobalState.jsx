import { useEffect, useState, createContext } from "react";
import {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
} from "../utilities/api";

const GlobalContext = createContext();

function getInitialStateFromLocalStorage() {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
        return JSON.parse(favorites);
    } else {
        return [];
    }
}

function GlobalProvider({ children }) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [favorites, setFavorites] = useState(
        getInitialStateFromLocalStorage()
    );

    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                setPopularMovies(data.results);
                // console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies");
            });
    }, []);

    useEffect(() => {
        getTopRatedMovies()
            .then((data) => {
                setTopRatedMovies(data.results);
            })
            .catch((error) => {
                console.error("Error fetching top rated movies");
            });
    }, []);

    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => {
                setNowPlayingMovies(data.results);
                // console.log(data);
                console.log(data.results);
            })
            .catch((error) => {
                console.error("Error fetching now playing movies");
            });
    }, []);

    useEffect(() => {
        getUpcomingMovies()
            .then((data) => {
                setUpcomingMovies(data.results);
                // console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching upcoming movies");
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    function addFavorite(movie) {
        setFavorites([...favorites, movie]);
    }

    function removeFavorite(movie) {
        const newFavorites = favorites.filter((fav) => fav.id !== movie.id);
        setFavorites(newFavorites);
    }

    // console.log(favorites);

    return (
        <GlobalContext.Provider
            value={{
                popularMovies,
                topRatedMovies,
                nowPlayingMovies,
                upcomingMovies,
                favorites,
                addFavorite,
                removeFavorite,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };
