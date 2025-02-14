import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => (
    <footer>
        <NavLink to="/">
            <img src={logo} alt="" />
        </NavLink>
        <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
        </div>
    </footer>
);

export default Footer;
