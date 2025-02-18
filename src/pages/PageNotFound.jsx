import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";

function PageNotFound() {
    useEffect(() => {
        document.title = `${appTitle} - Page Not Found`;
    }, []);

    return (
        <main className="page-not-found">
            <section>
                <h2>404 ... : (</h2>
                <p>Page not found.</p>
                <p>
                    Go to <Link to="/">Home page</Link>.
                </p>
            </section>
        </main>
    );
}

export default PageNotFound;
