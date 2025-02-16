import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../context/GlobalState";
import { appTitle } from "../globals/globalVariables";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function PageFavorites() {
    const { favorites } = useContext(GlobalContext);
    // Sort movies by id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    favorites.sort((a, b) => (a.id > b.id ? 1 : -1));

    useEffect(() => {
        document.title = `${appTitle} - Favorites`;
    }, []);

    return (
        <main>
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <div>
                    <p>Sorry you have no favorite movies.</p>
                    <p>
                        Return to the <Link to="/">home page</Link> to add a
                        favorite movie.
                    </p>
                </div>
            ) : (
                <div className="movie-list">
                    {favorites.map((favMovie) => {
                        return (
                            <MovieCard key={favMovie.id} movieData={favMovie} />
                        );
                    })}
                </div>
            )}
            {/* <section>
                {favs.length === 0 ? (
                    <div>
                        <p>Sorry you have no favorite movies.</p>
                        <p>
                            Return to the <Link to="/">home page</Link> to add a
                            favorite movie.
                        </p>
                    </div>
                ) : (
                    <div>
                        {favs.map((favMovie, i) => {
                            return <MovieCard key={i} />;
                        })}
                    </div>
                )}
            </section> */}
        </main>
    );
}

export default PageFavorites;
