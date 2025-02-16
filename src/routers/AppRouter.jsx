import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState";
import HeaderNav from "../components/HeaderNav";
// import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageAbout from "../pages/PageAbout";
import PageFavorites from "../pages/PageFavorites";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <HeaderNav />
                {/* <Nav /> */}
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/movie/:id" element={<PageSingleMovie />} />
                    <Route path="/favorites" element={<PageFavorites />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </GlobalProvider>
        </BrowserRouter>
    );
}

export default AppRouter;
