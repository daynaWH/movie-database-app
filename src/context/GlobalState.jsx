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

    // Fetch Popular Movies
    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                setPopularMovies(data.results);
            })
            .catch((error) => {
                console.error("Error fetching popular movies");
            });
    }, []);

    // Fetch Top Rate Movies
    useEffect(() => {
        getTopRatedMovies()
            .then((data) => {
                setTopRatedMovies(data.results);
            })
            .catch((error) => {
                console.error("Error fetching top rated movies");
            });
    }, []);

    // Fetch Now Playing Movies
    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => {
                setNowPlayingMovies(data.results);
            })
            .catch((error) => {
                console.error("Error fetching now playing movies");
            });
    }, []);

    // Fetch Upcoming Movies
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

    // Handle favorite movies from local storage
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
