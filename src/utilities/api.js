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

function getPopularMovies() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching popular movies", error);
            throw error;
        });
}

function getTopRatedMovies() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching top rated movies", error);
            throw error;
        });
}

function getUpcomingMovies() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching upcoming movies", error);
            throw error;
        });
}

function getMovieById(id) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching movie by id", error);
            throw error;
        });
}

function getCast(id) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        options
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching cast list", error);
            throw error;
        });
}

function getTrailer(id) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Error fetching trailer", error);
            throw error;
        });
}

export {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getMovieById,
    getCast,
    getTrailer,
};
