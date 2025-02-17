import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import MovieCard from "./MovieCard";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon-light.svg";
import searchIconToggled from "../assets/search-icon-dark.svg";
import hamburgerIcon from "../assets/hamburger-menu-white.svg";

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredMovie, setFilteredMovie] = useState([]);
    const { popularMovies, topRatedMovies, nowPlayingMovies, upcomingMovies } =
        useContext(GlobalContext);

    // Navigation Toggle
    function toggleNav() {
        setNavOpen(!navOpen);
    }

    function isDesktop(e) {
        if (e.matches) {
            setNavOpen(false);
        }
    }

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 768px)");
        mediaQuery.addEventListener("change", isDesktop);
        return () => mediaQuery.removeEventListener("change", isDesktop);
    }, []);

    function closeNav(e) {
        if (window.innerWidth < 768) {
            handleShowHideNav();
        }
    }

    // Search Bar Toggle
    const [toggled, setToggled] = useState(false);

    function openSearch() {
        setToggled(!toggled);
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
                {/* <header className={navOpen ? "nav-open" : "header-hidden"}> */}
                {/* <div className={navOpen ? "" : "header-hidden"}> */}
                <button
                    className="hamburger-icon"
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                    onClick={toggleNav}
                >
                    {/* <button className="hamburger-icon"> */}
                    <img src={hamburgerIcon} alt="Hamburger icon" />
                </button>
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Logo of the application"
                        className="logo"
                    />
                </NavLink>
                {/* </div> */}
                <div className="header-nav">
                    {/* <Nav handletoggleNav={toggleNav} /> */}
                    {/* <Nav /> */}
                    <nav
                        className={navOpen ? "nav-menu toggled" : "nav-menu"}
                        onClick={toggleNav}
                    >
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
                        </ul>
                    </nav>
                    <button
                        onClick={openSearch}
                        className={toggled ? "" : "search-icon light"}
                    >
                        <img src={searchIcon} alt="Search icon" />
                    </button>
                    <div className={toggled ? "searchbar" : "searchbar-hidden"}>
                        <button
                            onClick={openSearch}
                            className="search-icon dark"
                        >
                            <img src={searchIconToggled} alt="Search icon" />
                        </button>
                        <input type="text" onChange={searchMovie} />
                    </div>
                </div>
            </header>
            {searchInput.length > 0 ? (
                <div className="search-results">
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

export default Header;
