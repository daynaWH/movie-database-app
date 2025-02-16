import { TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatRating, formatRunTime } from "../utilities/toolbelt";
import { getMovieById, getCast } from "../utilities/api";
import rating from "../assets/rating-star.svg";

function PageSingleMovie() {
    const [movieData, setMovieData] = useState(null);
    const [movieCast, setMovieCast] = useState(null);

    // fetch the id parameter from react router using useParams
    const { id } = useParams();

    useEffect(() => {
        document.title = `${appTitle} - ${movieData.title}`;
    }, []);

    useEffect(() => {
        getMovieById(id)
            .then((data) => {
                setMovieData(data);
                console.log(data);
            })
            .catch(() => {
                console.error("Error fetching movie by id");
            });
    }, [id]);

    useEffect(() => {
        getCast(id)
            .then((data) => {
                setMovieCast(data);
                console.log(data);
            })
            .catch(() => {
                console.error("Error fetching cast list");
            });
    }, [id]);

    return (
        <main className="single">
            {movieData && (
                <div>
                    <h1>{movieData.title}</h1>
                    {movieData.genres.map((genre) => {
                        return <p key={genre.id}>{genre.name}</p>;
                    })}
                    <div className="rating">
                        <img src={rating} alt="rating star" />
                    </div>
                    <p>{formatRating(movieData.vote_average)}</p>
                    <div>
                        <img
                            src={`${TMDB_IMAGE_BASE_URL}/w1280${movieData.backdrop_path}`}
                            alt={`Backdrop of ${movieData.title}`}
                        />
                    </div>
                    <div>
                        {/* release date (yyyy/mm/dd) | running time ([h]h [m]min) | PG(replace with i.e. country) */}
                        <p>{movieData.release_date}</p>
                        <p>{formatRunTime(movieData.runtime)}</p>
                        <p>{movieData.origin_country}</p>
                    </div>
                    <h2>Synopsis</h2>
                    <p>{movieData.overview}</p>
                    <div className="cast">
                        {/* cast */}
                        <h2>Cast</h2>
                        {movieCast.cast.map((actor) => {
                            return (
                                <div key={actor.cast_id}>
                                    <img
                                        src={`${TMDB_IMAGE_BASE_URL}/w185${actor.profile_path}`}
                                        alt={`Profile picture of ${actor.name}`}
                                    />
                                    <p>{actor.name}</p>
                                    <p>{actor.character}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </main>
    );
}

export default PageSingleMovie;
