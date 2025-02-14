import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import { getTopRatedMovies } from "../utilities/api";
import { getNowPlayingMovies } from "../utilities/api";
import { getUpcomingMovies } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function PageHome() {
    const [test, setTest] = useState(null);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                setPopularMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching popular movies");
            });
    }, []);

    useEffect(() => {
        getTopRatedMovies()
            .then((data) => {
                setTopRatedMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching top rated movies");
            });
    }, []);

    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => {
                setNowPlayingMovies(data.results);
                console.log(data);
            })
            .catch((error) => {
                alert("Error fetching now playing movies");
            });
    }, []);

    useEffect(() => {
        getUpcomingMovies()
            .then((data) => {
                setUpcomingMovies(data.results);
                console.log(data);
            })
            .catch((error) => {
                alert("Error fetching upcoming movies");
            });
    }, []);

    return (
        <main id="home">
            <Tabs>
                <TabList className="tablist">
                    <Tab className="submenu">Popular</Tab>
                    <Tab className="submenu">Top Rated</Tab>
                    <Tab className="submenu">Now Playing</Tab>
                    <Tab className="submenu">Upcoming</Tab>
                </TabList>
                <TabPanel>
                    <div className="movie-list">
                        {popularMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {topRatedMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {nowPlayingMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {upcomingMovies.map((movieData) => (
                            <MovieCard
                                key={movieData.id}
                                movieData={movieData}
                            />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </main>
    );
}

export default PageHome;
