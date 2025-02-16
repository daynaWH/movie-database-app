import { TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";
import { formatRating } from "../utilities/toolbelt";
import { Link } from "react-router-dom";
import rating from "../assets/rating-star.svg";
import heart from "../assets/heart-default.svg";
import heartToggled from "../assets/heart-toggled.svg";
// import { useDispatch } from "react-redux";
import FavBtn from "./FavBtn";

// {
//     "adult": false,
//     "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
//     "genre_ids": [
//         28,
//         878,
//         35,
//         10751
//     ],
//     "id": 939243,
//     "original_language": "en",
//     "original_title": "Sonic the Hedgehog 3",
//     "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
//     "popularity": 4739.045,
//     "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
//     "release_date": "2024-12-19",
//     "title": "Sonic the Hedgehog 3",
//     "video": false,
//     "vote_average": 7.861,
//     "vote_count": 1175
// }

function MovieCard({ movieData }) {
    // const dispatch = useDispatch();

    // function handleFavClick(addToFav, obj) {
    //     if (addToFav === true) {
    //         dispatch(addFav(obj));
    //     } else {
    //         dispatch(deleteFav(obj));
    //     }
    // }

    return (
        <div className="movie-card">
            <div className="movie-backdrop">
                <img
                    src={`${TMDB_IMAGE_BASE_URL}/w342${movieData.poster_path}`}
                    alt={`Poster of ${movieData.title}`}
                />
                {/* <div className="favorite-btn"> */}
                <FavBtn movie={movieData} />
                {/* </div> */}
                <div className="movie-card-info-hover">
                    {/* <div className="movie-card-info-hover"> */}
                    <p className="short-description">{movieData.overview}</p>
                    <Link to={`/movie/${movieData.id}`}>More Info</Link>
                    {/* </div> */}
                </div>
            </div>
            <div className="movie-card-info">
                <div>
                    <h2>{movieData.title}</h2>
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
