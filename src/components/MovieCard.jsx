import { TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";
import { formatRating } from "../utilities/toolbelt";
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
    return (
        <div className="movie-card">
            <img
                src={`${TMDB_IMAGE_BASE_URL}/w342${movieData.poster_path}`}
                alt={`Poster of ${movieData.title}`}
            />
            <div className="favorite-btn">
                <button>♡</button>
            </div>
            <div className="movie-card-info-hover">
                <p></p>
                <a>More Info</a>
            </div>
            <div className="movie-card-info">
                <h2>{movieData.title}</h2>
                <p>{movieData.release_date}</p>
                <div className="rating">
                    <p>{formatRating(movieData.vote_average)}</p>
                    {/* <p>{movieData.vote_average}</p> */}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
