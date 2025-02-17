import { useState } from "react";
import {
    TMDB_IMAGE_BASE_URL,
    YOUTUBE_VIDEO_BASE_URL,
} from "../globals/globalVariables";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

function ProfileTrailerSlider({ movieData, movieTrailer }) {
    const [slider, setSlider] = useState(null);

    function displayPoster() {
        setSlider("poster");
    }

    function displayTrailer() {
        setSlider("trailer");
    }

    return (
        <>
            <button onClick={displayPoster}>
                <img src={arrowLeft} alt="Arrow pointing left" />
            </button>
            <div
                className={
                    slider === "poster" ? "poster visible" : "poster hidden"
                }
            >
                <img
                    src={`${TMDB_IMAGE_BASE_URL}/w342${movieData.poster_path}`}
                    alt={`Poster of ${movieData.title}`}
                />
                <img
                    src={`${TMDB_IMAGE_BASE_URL}/w1280${movieData.backdrop_path}`}
                    alt={`Backdrop of ${movieData.title}`}
                    className="backdrop"
                />
            </div>
            <div
                className={
                    slider === "trailer" ? "trailer visible" : "trailer hidden"
                }
            >
                {movieTrailer && (
                    <iframe
                        width="640"
                        height="360"
                        src={`${YOUTUBE_VIDEO_BASE_URL}${movieTrailer[0].key}`}
                    ></iframe>
                )}
            </div>
            <button onClick={displayTrailer}>
                <img src={arrowRight} alt="Arrow pointing right" />
            </button>
        </>
    );
}

export default ProfileTrailerSlider;
