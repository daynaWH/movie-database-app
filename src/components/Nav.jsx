import { NavLink } from "react-router-dom";

function Nav({ handleShowHideNav }) {
    function closeNav(e) {
        if (window.innerWidth < 768) {
            handleShowHideNav();
        }
    }

    return (
        <nav
            className={navOpen ? "nav-menu toggled" : "nav-menu"}
            onClick={closeNav}
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
    );
}

export default Nav;
