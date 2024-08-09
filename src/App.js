import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import WordPage from "./pages/Word";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { getWait } from "./store/waiting";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import AboutPage from "./pages/About";

function App() {
    const spinner = useSelector(getWait);

    return (
        <div className="app">
            {spinner && <Spinner />}
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/word/:word" element={<WordPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
