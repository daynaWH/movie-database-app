import { TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";
import { formatRating } from "../utilities/toolbelt";
import { Link } from "react-router-dom";
import FavBtn from "./FavBtn";
import rating from "../assets/rating-star.svg";
import posterUnavailable from "../assets/poster-unavailable.svg";

function MovieCard({ movieData }) {
    return (
        <div className="movie-card">
            <div className="movie-backdrop">
                {movieData.poster_path ? (
                    <img
                        src={`${TMDB_IMAGE_BASE_URL}/w342${movieData.poster_path}`}
                        alt={`Poster of ${movieData.title}`}
                    />
                ) : (
                    <img
                        src={posterUnavailable}
                        alt={`Unavailable poster of ${movieData.title}`}
                        className="poster-img"
                    />
                )}

                <FavBtn movie={movieData} />
                <div className="movie-card-info-hover">
                    <p className="short-description">{movieData.overview}</p>
                    <Link to={`/movie/${movieData.id}`}>More Info</Link>
                </div>
            </div>
            <div className="movie-card-info">
                <div>
                    <p className="movie-title">{movieData.title}</p>
                    <p>{movieData.release_date}</p>
                </div>
                <div className="rating">
                    <p>{formatRating(movieData.vote_average)}</p>
                    <img src={rating} alt="rating star" />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
