import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import heart from "../assets/heart-default.svg";
import heartToggled from "../assets/heart-toggled.svg";

function FavBtn({ movie }) {
    const { favorites, addFavorite, removeFavorite } =
        useContext(GlobalContext);

    const isFav = favorites.find((fav) => {
        return fav.id == movie.id;
    });

    function handleFavClick(e) {
        e.stopPropagation();
        if (isFav) {
            removeFavorite(movie);
        } else {
            addFavorite(movie);
        }
    }

    // function handleAddFav() {
    //     handleFavClick(true, movie);
    // }

    // function handleRemoveFav() {
    //     handleFavClick(false, movie);
    // }

    return (
        <>
            <button onClick={handleFavClick} className="favorite-btn">
                {!isFav ? (
                    <img src={heart} alt="favorite button" />
                ) : (
                    <img src={heartToggled} alt="favorite button" />
                )}
            </button>
            {/* {isFav ? (
                <button onClick={handleFavClick} className="favorite-btn">
                    <img src={heart} alt="favorite button" />
                </button>
            ) : (
                <button onClick={handleFavClick} className="favorite-btn">
                    <img src={heartToggled} alt="favorite button" />
                </button>
            )} */}
        </>
    );
}

export default FavBtn;
