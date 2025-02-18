import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import heart from "../assets/heart-default.svg";
import heartToggled from "../assets/heart-toggled.svg";

// Favorite button attached to each movie card
function FavBtn({ movie }) {
    const { favorites, addFavorite, removeFavorite } =
        useContext(GlobalContext);

    const isFav = favorites.find((fav) => {
        return fav.id == movie.id;
    });

    // Upon clicking the button, remove or add the movie to the favorites list
    function handleFavClick(e) {
        e.stopPropagation();
        if (isFav) {
            removeFavorite(movie);
        } else {
            addFavorite(movie);
        }
    }

    return (
        <>
            <button onClick={handleFavClick} className="favorite-btn">
                {!isFav ? (
                    <img src={heart} alt="favorite button" />
                ) : (
                    <img src={heartToggled} alt="favorite button" />
                )}
            </button>
        </>
    );
}

export default FavBtn;
