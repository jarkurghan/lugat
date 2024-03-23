import React from "react";
import SearchForm from "../Home/Search";

function Search() {
    const onSearch = (e) => {
        e.preventDefault();
        console.log("search");
    };

    return (
        <div className="bg-red-50 max-w-screen-2xl mx-auto">
            {/* <div className="mb-10">
                <SearchForm onSearch={onSearch} />
            </div> */}
            <div>1</div>
        </div>
    );
}

export default Search;
