import { useEffect } from "react";
import { useSelector } from "react-redux";
import { appTitle } from "../globals/globalVariables";

function PageFavorites() {
    useEffect(() => {
        document.title = `${appTitle} - Favorites`;
    }, []);

    return (
        <main>
            <h1>Favorites</h1>
            {}
        </main>
    );
}

export default PageFavorites;
