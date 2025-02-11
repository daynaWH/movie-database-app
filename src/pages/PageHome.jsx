import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";

function PageHome() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
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
            <div>
                {nowPlayingMovies.map((movieData) => (
                    <MovieCard key={movieData.id} movieData={movieData} />
                ))}
            </div>
        </main>
    );
}

export default PageHome;
