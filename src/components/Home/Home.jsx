import React from "react";
import SearchForm from "./Search";

const Home = () => {
    return (
        <div className="h-[calc(100vh-128px)] pb-[64px] flex items-center justify-center">
            <SearchForm />
        </div>
    );
};

export default Home;
