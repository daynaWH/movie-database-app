import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instaIcon from "../assets/icon-instagram.svg";
import tmdbLogo from "../assets/tmdb.svg";

function PageAbout() {
    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main className="about">
            <section className="about-us">
                <h1>About Us</h1>
                <p>
                    Scenema is a movie database website where you can explore
                    movies from a wide range of genres from all over the world.
                    We provide information about each movie and you can also
                    save your favorite movie list.
                </p>
                <p>
                    Now take your time to choose your new favorite movie and
                    enjoy the show!
                </p>
                <p>
                    This product uses the TMDb API but is not endorsed or
                    certified by TMDb.
                </p>
                <img src={tmdbLogo} alt="TMDB Logo" />
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <a href="tel:+##########">
                    <img src={phoneIcon} alt="Phone Icon" />
                </a>
                <a href="mailto:scenema@email.com">
                    <img src={emailIcon} alt="Email Icon" />
                </a>
                <a href="#">
                    <img src={facebookIcon} alt="Facebook Messenger Icon" />
                </a>
                <a href="#">
                    <img src={instaIcon} alt="Instagram Icon" />
                </a>
            </section>
        </main>
    );
}

export default PageAbout;
