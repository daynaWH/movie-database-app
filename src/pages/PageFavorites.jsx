import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { appTitle } from "../globals/globalVariables";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

function PageFavorites() {
    const { favorites } = useContext(GlobalContext);
    // Sort movies by id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    favorites.sort((a, b) => (a.id > b.id ? 1 : -1));

    useEffect(() => {
        document.title = `${appTitle} - Favorites`;
    }, []);

    return (
        <main className="favorites">
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <div className="no-favorites-container">
                    <p>Sorry you have no favorite movies.</p>
                    <p>
                        Return to the <Link to="/">home page</Link> to add a
                        favorite movie.
                    </p>
                </div>
            ) : (
                <Dropdown />
            )}
        </main>
    );
}

export default PageFavorites;
