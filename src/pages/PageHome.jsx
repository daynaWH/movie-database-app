import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utilities/api";

function PageHome() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => {
                setNowPlayingMovies(data.results);
                console.log(data);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);
}

export default PageHome;
