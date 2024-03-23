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

function App() {
    const spinner = useSelector(getWait);

    return (
        <div className="app">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/word/:word" element={<WordPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            {spinner.toString()}
            <Footer />
        </div>
    );
}

export default App;
