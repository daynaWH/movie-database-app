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
            // This ensures movie cards are updated whenever the search input changes
            setFilteredMovie([]);
        }
    }, [searchInput]);

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
                        className={
                            navOpen ? "nav-menu toggleSearch" : "nav-menu"
                        }
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
            {/* {searchInput.length > 0 && toggleSearch === true ? ( */}
            <div
                className={
                    searchInput.length > 0 && toggleSearch === true
                        ? "search-results"
                        : "search-results-close"
                }
            >
                {filteredMovie.map((movie, index) => {
                    const key = `${movie.id}-${index}`; // Assuming `source` is a property indicating the movie's array origin
                    return <MovieCard key={key} movieData={movie} />;
                    // return <MovieCard key={movie.id} movieData={movie} />;
                })}
            </div>
            {/* ) : ( */}
            {/* <div className="search-results-close"></div> */}
            {/* )} */}
        </div>
    );
}

export default Header;
