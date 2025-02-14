import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
// import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageSingle from "../pages/PageSingle";
import PageAbout from "../pages/PageAbout";
import PageFavorites from "../pages/PageFavorites";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <HeaderNav />
            {/* <Nav /> */}
            <Routes>
                <Route path="/" element={<PageHome />} />
                {/* <Route path="/single" element={<PageSingle />} /> */}
                <Route path="/favorites" element={<PageFavorites />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
