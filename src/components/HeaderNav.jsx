import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon-light.svg";
import searchIconToggled from "../assets/search-icon-dark.svg";
import hamburgerIcon from "../assets/hamburger-menu-white.svg";
import closeBtn from "../assets/btn-close.svg";

function HeaderNav() {
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
    // Completed with support from Copilot
    const [toggleSearch, setToggleSearch] = useState(false);

    function openSearch() {
        setToggleSearch(!toggleSearch);
    }

    function searchMovie(e) {
        e.preventDefault();
        const searchInput = e.target.value;
        setSearchInput(searchInput);
    }
    useEffect(() => {
        const allMovies = [
            ...popularMovies,
            ...topRatedMovies,
            ...nowPlayingMovies,
            ...upcomingMovies,
        ];

        // Built Array of Objects removing duplicates
        // Based on reference from https://fullstackheroes.com/tutorials/javascript/5-ways-to-remove-duplicate-objects-from-array-based-on-property/?utm_source=chatgpt.com
        const uniqueMovies = allMovies.filter(
            (value, index, self) =>
                index === self.findIndex((movie) => movie.title === value.title)
        );

        if (searchInput.length > 0) {
            const matches = uniqueMovies.filter((movie) => {
                return movie.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredMovie(matches);
        } else {
            setFilteredMovie([]);
        }
    }, [searchInput]);

    return (
        <div>
            <header>
                <button
                    className="hamburger-icon"
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                    onClick={toggleNav}
                >
                    <img src={hamburgerIcon} alt="Hamburger icon" />
                </button>
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Logo of the application"
                        className="logo"
                    />
                </NavLink>
                <div className="header-nav">
                    <nav
                        className={navOpen ? "nav-menu toggled" : "nav-menu"}
                        onClick={toggleNav}
                    >
                        <button
                            onClick={toggleNav}
                            className="close-btn mobile-only"
                        >
                            <img src={closeBtn} alt="Close button" />
                        </button>
                        <ul>
                            <li className="mobile-only">
                                <img src={logo} alt="Logo" />
                            </li>
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
                        className={toggleSearch ? "" : "search-icon light"}
                    >
                        <img src={searchIcon} alt="Search icon" />
                    </button>
                    <div
                        className={
                            toggleSearch ? "searchbar" : "searchbar-hidden"
                        }
                    >
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
            <div
                className={
                    searchInput.length > 0 && toggleSearch === true
                        ? "search-results"
                        : "search-results-close"
                }
            >
                {filteredMovie.map((movie) => {
                    return <MovieCard key={movie.id} movieData={movie} />;
                })}
            </div>
        </div>
    );
}

export default HeaderNav;
