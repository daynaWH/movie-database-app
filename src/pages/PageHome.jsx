import { appTitle, TMDB_IMAGE_BASE_URL } from "../globals/globalVariables";
import { useEffect, useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";
import Slider from "../components/Slider";

function PageHome() {
    const [bannerMovieSet, setBannerMovieSet] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0);
    const { popularMovies, topRatedMovies, nowPlayingMovies, upcomingMovies } =
        useContext(GlobalContext);

    useEffect(() => {
        document.title = `${appTitle} - Movies`;
    }, []);

    useEffect(() => {
        if (nowPlayingMovies.length > 0) {
            getRandomMovie();
        }
    }, [nowPlayingMovies]);

    // Generate 3 random movies from Now Playing category to display in the Hero Slider
    // Issues fixed and refactored with support of Copilot
    function getRandomMovie() {
        const randomMovies = [];

        do {
            const randomIndex = Math.floor(
                Math.random() * nowPlayingMovies.length
            );
            const randomMovie = nowPlayingMovies[randomIndex];

            if (!randomMovies.includes(randomMovie)) {
                randomMovies.push(randomMovie);
            }
        } while (randomMovies.length < 3);

        setBannerMovieSet(randomMovies);
    }

    // Render Banner for each randomly selected movie with movie title and overview
    function renderBanner() {
        return bannerMovieSet.map((movieData, index) => {
            return (
                <div
                    key={movieData.id}
                    className={sliderIndex === index ? "visible" : "hidden"}
                >
                    <div className="banner-info">
                        <h1>{movieData.title}</h1>
                        <p>{movieData.overview}</p>
                    </div>
                    <img
                        src={`${TMDB_IMAGE_BASE_URL}/w780${movieData.backdrop_path}`}
                        alt={`Backdrop of ${movieData.title}`}
                    />
                </div>
            );
        });
    }

    return (
        <main id="home">
            <div className="hero-slider">
                {renderBanner()}
                <Slider
                    data={bannerMovieSet}
                    sliderIndex={sliderIndex}
                    setSliderIndex={setSliderIndex}
                />
            </div>

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
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {topRatedMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {nowPlayingMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="movie-list">
                        {upcomingMovies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movieData={movie} />
                            );
                        })}
                    </div>
                </TabPanel>
            </Tabs>
        </main>
    );
}

export default PageHome;
