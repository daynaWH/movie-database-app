import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageSingle from "../pages/PageSingle";
import PageAbout from "../pages/PageAbout";
import PageFavorites from "../pages/PageFavorites";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/single" element={<PageSingle />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/favorites" element={<PageFavorites />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
