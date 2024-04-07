import React from "react";
import Navbar from "./Navbar";
import { getResult } from "../../store/word";
import { useSelector } from "react-redux";
import SearchItem from "./ResultItem";

function Search() {
    const results = useSelector(getResult);

    return (
        <div className="max-w-5xl xl:max-w-4xl m-6 xl:ml-40">
            <Navbar />
            <div>
                {results.map((e) => (
                    <SearchItem key={e.word} data={e} />
                ))}
            </div>
        </div>
    );
}

export default Search;
