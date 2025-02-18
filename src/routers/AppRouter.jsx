import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageFavorites from "../pages/PageFavorites";
import PageAbout from "../pages/PageAbout";
import PageNotFound from "../pages/PageNotFound";
import { APP_FOLDER_NAME } from "../globals/globalVariables";

function AppRouter() {
    return (
        <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
            <GlobalProvider>
                <HeaderNav />
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
