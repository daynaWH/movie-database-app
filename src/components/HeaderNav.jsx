import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon-light.svg";
// import Nav from "./Nav";

const HeaderNav = () => (
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
                <button>
                    <img src={searchIcon} alt="" />
                </button>
            </ul>
        </nav>
    </header>
);

export default HeaderNav;
