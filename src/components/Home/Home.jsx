import React from "react";
import SearchForm from "./Search";

const Home = () => {
    const onSearch = (e) => {
        e.preventDefault();
        console.log("search");
    };

    return (
        <div className="h-[calc(100vh-128px)] pb-[64px] flex items-center justify-center">
            <SearchForm onSearch={onSearch} />
        </div>
    );
};

export default Home;
