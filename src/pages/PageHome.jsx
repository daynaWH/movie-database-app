import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utilities/api";
import { getPopularMovies } from "../utilities/api";
import { getTopRatedMovies } from "../utilities/api";
import { getUpcomingMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import { TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";

function PageHome() {
    const [test, setTest] = useState(null);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                setNowPlayingMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching popular movies");
            });
    }, []);

    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => {
                setNowPlayingMovies(data.results);
                console.log(data);
            })
            .catch((error) => {
                alert("Error fetching now playing movies");
            });
    }, []);

    return (
        <main id="home">
            <div className="movie-list">
                {nowPlayingMovies.map((movieData) => (
                    <MovieCard key={movieData.id} movieData={movieData} />
                ))}
            </div>
        </main>
    );
}

export default PageHome;
