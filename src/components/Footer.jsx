import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
    return (
        <footer>
            <NavLink to="/">
                <img
                    src={logo}
                    alt="Logo of the application"
                    className="logo"
                />
            </NavLink>
            <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
            </div>
        </footer>
    );
}

export default Footer;
