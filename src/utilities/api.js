const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getNowPlayingMovies() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching now playing movies", error);
            throw error;
        });
}

export { getNowPlayingMovies };
