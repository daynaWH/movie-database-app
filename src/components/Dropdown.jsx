import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { getPopularMovies } from "../utilities/api";
import { getTopRatedMovies } from "../utilities/api";
import { getNowPlayingMovies } from "../utilities/api";
import { getUpcomingMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";

function Dropdown() {
    const { favorites } = useContext(GlobalContext);

    function displayList(e) {
        console.log(e.target.value);
    }

    return (
        <div>
            <select name="" id="" onChange={displayList}>
                <option value="all">All</option>
                <option value="popular">Popular</option>
                <option value="top-rated">Top Rated</option>
                <option value="now-playing">Now Playing</option>
                <option value="upcoming">Upcoming</option>
            </select>
            <div className="movie-list">
                {favorites.map((favMovie) => {
                    return <MovieCard key={favMovie.id} movieData={favMovie} />;
                })}
            </div>
        </div>
    );
}

export default Dropdown;
