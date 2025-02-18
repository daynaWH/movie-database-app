import { appTitle, TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatRating, formatRunTime } from "../utilities/toolbelt";
import { getMovieById, getCast, getTrailer } from "../utilities/api";
import PosterTrailerSlider from "../components/PosterTrailerSlider";
import rating from "../assets/rating-star.svg";
import profileUnavailable from "../assets/profile-unavailable.png";

function PageSingleMovie() {
    const [movieData, setMovieData] = useState(null);
    const [movieCast, setMovieCast] = useState(null);
    const [movieTrailer, setMovieTrailer] = useState(null);

    // Fetch the id parameter from react router
    const { id } = useParams();

    useEffect(() => {
        if (movieData) {
            document.title = `${appTitle} - ${movieData.title}`;
        }
    }, []);

    // Fetch movie data
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

    // Fetch Cast data of the movie
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

    // Fetch trailer data
    useEffect(() => {
        getTrailer(id)
            .then((data) => {
                setMovieTrailer(data.results);
                console.log(data.results);
            })
            .catch(() => {
                console.error("Error fetching trailer");
            });
    }, [id]);

    return (
        <main className="single-movie">
            {movieData && (
                <div>
                    <h1>{movieData.title}</h1>
                    <div className="single-subheading">
                        <div className="genre">
                            {movieData.genres.map((genre) => {
                                return <p key={genre.id}>{genre.name}</p>;
                            })}
                        </div>
                        <div className="rating">
                            <img src={rating} alt="rating star" />
                            <p>{formatRating(movieData.vote_average)}</p>
                        </div>
                    </div>

                    <section className="slider-wrapper">
                        <PosterTrailerSlider
                            movieData={movieData}
                            movieTrailer={movieTrailer}
                        />
                    </section>

                    <section className="section-bottom">
                        <div className="basic-info">
                            <p>{movieData.release_date}</p>
                            <p>{formatRunTime(movieData.runtime)}</p>
                            <p>{movieData.origin_country}</p>
                        </div>
                        <div className="synopsis">
                            <h2>Synopsis</h2>
                            <p>{movieData.overview}</p>
                        </div>

                        <h2>Cast</h2>
                        <div className="cast">
                            {movieCast &&
                                movieCast.cast.map((actor) => {
                                    return (
                                        <div
                                            key={actor.cast_id}
                                            className="cast-info"
                                        >
                                            {actor.profile_path ? (
                                                <img
                                                    src={`${TMDB_IMAGE_BASE_URL}/w185${actor.profile_path}`}
                                                    alt={`Profile picture of ${actor.name}`}
                                                />
                                            ) : (
                                                <img
                                                    src={profileUnavailable}
                                                    // Image from https://pixabay.com/vectors/avatar-icon-placeholder-facebook-1577909/
                                                    alt="Unavailable profile picture"
                                                    className="profile-unavailable"
                                                />
                                            )}
                                            <div className="cast-info-hover">
                                                <p className="cast-name">
                                                    {actor.name}
                                                </p>
                                                <p className="cast-character">
                                                    {actor.character}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </section>
                </div>
            )}
        </main>
    );
}

export default PageSingleMovie;
