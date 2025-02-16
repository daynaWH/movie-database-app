import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon-light.svg";
import searchIconToggled from "../assets/search-icon-dark.svg";
import MovieCard from "./MovieCard";
// import Nav from "./Nav";

function HeaderNav() {
    const [searchInput, setSearchInput] = useState("");
    const [filteredMovie, setFilteredMovie] = useState([]);
    const { popularMovies, topRatedMovies, nowPlayingMovies, upcomingMovies } =
        useContext(GlobalContext);

    // Search Bar Toggle
    const [toggled, setToggled] = useState(false);

    function openSearch() {
        if (!toggled) {
            setToggled(true);
        } else {
            setToggled(false);
        }
    }

    function searchMovie(e) {
        e.preventDefault();
        const searchInput = e.target.value;
        setSearchInput(searchInput);

        const allMovies = [
            ...popularMovies,
            ...topRatedMovies,
            ...nowPlayingMovies,
            ...upcomingMovies,
        ];
        if (searchInput.length > 0) {
            const matches = allMovies.filter((movie) => {
                return movie.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredMovie(matches);
            filteredMovie.map((movie) => {
                console.log(movie.title);
            });
        }
    }

    return (
        <div>
            <header>
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <button
                            onClick={openSearch}
                            className={toggled ? "hidden" : "visible"}
                        >
                            <img src={searchIcon} alt="" />
                        </button>
                        <div className={toggled ? "visible" : "hidden"}>
                            <button onClick={openSearch}>
                                <img src={searchIconToggled} alt="" />
                            </button>
                            <input type="text" onChange={searchMovie} />
                        </div>
                    </ul>
                </nav>
            </header>
            {searchInput.length > 0 ? (
                <div className="open">
                    {filteredMovie.map((movie) => {
                        return <MovieCard key={movie.id} movieData={movie} />;
                    })}
                </div>
            ) : (
                <div className="close"></div>
            )}
        </div>
    );
}

export default HeaderNav;
