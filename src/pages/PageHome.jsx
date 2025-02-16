import { useEffect, useState, useContext } from "react";
// import {
//     getPopularMovies,
//     getTopRatedMovies,
//     getNowPlayingMovies,
//     getUpcomingMovies,
// } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { appTitle } from "../globals/globalVariables";
// import { MoviesContext } from "../context/Movies";
import { GlobalContext } from "../context/GlobalState";

function PageHome() {
    const {
        popularMovies,
        topRatedMovies,
        nowPlayingMovies,
        upcomingMovies,
        searched,
    } = useContext(GlobalContext);
    // const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    // const [popularMovies, setPopularMovies] = useState([]);
    // const [topRatedMovies, setTopRatedMovies] = useState([]);
    // const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        document.title = `${appTitle} - Movies`;
    }, []);

    // useEffect(() => {
    //     getPopularMovies()
    //         .then((data) => {
    //             setPopularMovies(data.results);
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching popular movies");
    //         });
    // }, []);

    // useEffect(() => {
    //     getTopRatedMovies()
    //         .then((data) => {
    //             setTopRatedMovies(data.results);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching top rated movies");
    //         });
    // }, []);

    // useEffect(() => {
    //     getNowPlayingMovies()
    //         .then((data) => {
    //             setNowPlayingMovies(data.results);
    //             // console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching now playing movies");
    //         });
    // }, []);

    // useEffect(() => {
    //     getUpcomingMovies()
    //         .then((data) => {
    //             setUpcomingMovies(data.results);
    //             // console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching upcoming movies");
    //         });
    // }, []);

    return (
        <main id="home">
            {/* {searched.length === 0 ? ( */}
            <Tabs>
                <TabList className="tablist">
                    <Tab className="submenu">Popular</Tab>
                    <Tab className="submenu">Top Rated</Tab>
                    <Tab className="submenu">Now Playing</Tab>
                    <Tab className="submenu">Upcoming</Tab>
                </TabList>
                <TabPanel>
                    <div className="movie-list">
                        {popularMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                        {/* {popularMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))} */}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {topRatedMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                        {/* {topRatedMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))} */}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {nowPlayingMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                        {/* {nowPlayingMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))} */}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {upcomingMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                        {/* {upcomingMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))} */}
                    </div>
                </TabPanel>
            </Tabs>
            {/* ) : (
                <div>
                    {searched.map((movie) => {
                        <MovieCard key={movie.id} movieData={searched} />;
                    })}
                </div>
            )} */}
        </main>
    );
}

export default PageHome;
