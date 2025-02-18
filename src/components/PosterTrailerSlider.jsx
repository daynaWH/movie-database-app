import { useState } from "react";
import {
    TMDB_IMAGE_BASE_URL,
    YOUTUBE_VIDEO_BASE_URL,
} from "../globals/globalVariables";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import posterUnavailable from "../assets/poster-unavailable.svg";

// Display Poster (default) or Trailer upon clicking the button in the slider in the single movie page
function PosterTrailerSlider({ movieData, movieTrailer }) {
    const [slider, setSlider] = useState("poster");

    function displayPoster() {
        setSlider("poster");
    }

    function displayTrailer() {
        setSlider("trailer");
    }

    return (
        <>
            <div className="poster-trailer-slider">
                {movieData.poster_path ? (
                    <div
                        className={
                            slider === "poster"
                                ? "poster visible"
                                : "poster hidden"
                        }
                    >
                        <img
                            src={`${TMDB_IMAGE_BASE_URL}/w342${movieData.poster_path}`}
                            alt={`Poster of ${movieData.title}`}
                            className="poster-img"
                        />
                        <img
                            src={`${TMDB_IMAGE_BASE_URL}/w1280${movieData.backdrop_path}`}
                            alt={`Backdrop of ${movieData.title}`}
                            className="backdrop-img"
                        />
                    </div>
                ) : (
                    <img
                        src={posterUnavailable}
                        alt={`Unavailable poster of ${movieData.title}`}
                        className="poster-img"
                    />
                )}

                {movieTrailer && (
                    <iframe
                        width="640"
                        height="360"
                        src={`${YOUTUBE_VIDEO_BASE_URL}${movieTrailer[0].key}`}
                        className={
                            slider === "trailer"
                                ? "trailer visible"
                                : "trailer hidden"
                        }
                    ></iframe>
                )}
            </div>
            <div className="single-slider-btns">
                <button onClick={displayPoster} className="btn-poster">
                    <img src={arrowLeft} alt="Arrow pointing left" />
                </button>
                <button onClick={displayTrailer} className="btn-trailer">
                    <img src={arrowRight} alt="Arrow pointing right" />
                </button>
            </div>
        </>
    );
}

export default PosterTrailerSlider;
