import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Dropdown() {
    const {
        popularMovies,
        topRatedMovies,
        nowPlayingMovies,
        upcomingMovies,
        favorites,
    } = useContext(GlobalContext);
    const [filteredMovies, setFilteredMovies] = useState(favorites);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        if (favorites.length > 0) {
            filterMovie(category);
        }
    }, [favorites, category]);

    function getCategory(e) {
        setCategory(e.target.value);
    }

    function filterMovie(category) {
        if (category === "popular") {
            setFilteredMovies(
                favorites.filter((favMovie) =>
                    popularMovies.some((movie) => movie.id === favMovie.id)
                )
            );
        } else if (category === "top-rated") {
            setFilteredMovies(
                favorites.filter((favMovie) =>
                    topRatedMovies.some((movie) => movie.id === favMovie.id)
                )
            );
        } else if (category === "now-playing") {
            setFilteredMovies(
                favorites.filter((favMovie) =>
                    nowPlayingMovies.some((movie) => movie.id === favMovie.id)
                )
            );
        } else if (category === "upcoming") {
            setFilteredMovies(
                favorites.filter((favMovie) =>
                    upcomingMovies.some((movie) => movie.id === favMovie.id)
                )
            );
        } else {
            setFilteredMovies(favorites);
        }
    }

    return (
        <div>
            <select name="" id="" onChange={getCategory}>
                <option value="all">All</option>
                <option value="popular">Popular</option>
                <option value="top-rated">Top Rated</option>
                <option value="now-playing">Now Playing</option>
                <option value="upcoming">Upcoming</option>
            </select>
            {filteredMovies.length > 0 ? (
                <div className="movie-list">
                    {filteredMovies.map((favMovie) => {
                        return (
                            <MovieCard key={favMovie.id} movieData={favMovie} />
                        );
                    })}
                </div>
            ) : (
                <div className="no-favorites-container">
                    <p>Sorry you have no favorite movies in this category.</p>
                    <p>
                        Return to the <Link to="/">home page</Link> to add a
                        favorite movie.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
