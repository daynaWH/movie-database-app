import { useEffect, useState, createContext } from "react";

const GlobalContext = createContext();

function getInitialStateFromLocalStorage() {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
        return JSON.parse(favorites);
    } else {
        return [];
    }
}

function GlobalProvider({ children }) {
    const [favorites, setFavorites] = useState(
        getInitialStateFromLocalStorage()
    );

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    function addFavorite(movie) {
        setFavorites([...favorites, movie]);
    }

    function removeFavorite(movie) {
        const newFavorites = favorites.filter((fav) => fav.id !== movie.id);
        setFavorites(newFavorites);
    }

    console.log(favorites);

    return (
        <GlobalContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };
