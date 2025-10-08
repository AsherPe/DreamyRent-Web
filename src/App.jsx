import { Routes, Route } from "react-router-dom";
import Navbar from './components/home/Navbar.jsx';
import Hero from "./components/home/Hero.jsx";
import About from "./components/home/About.jsx";
import Gallery from "./components/home/Gallery.jsx";
import Footer from "./components/home/Footer.jsx";
import ApartmentsList from "./pages/ApartmentsList.jsx";
import Apartment from "./pages/Apartment.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                {/* דף הבית */}
                <Route path="/" element={
                    <>
                        <Hero />
                        <About />
                        <Gallery />
                        <Footer />
                    </>
                } />

                {/* דף כל הדירות */}
                <Route path="/apartments" element={<ApartmentsList />} />

                {/* דף נחיתה לדירה ספציפית */}
                <Route path="/apartments/:id" element={<Apartment />} />

                {/* כאן אפשר להוסיף דפים נוספים כמו /contact וכו' */}
            </Routes>
        </>
    )
}

export default App;
