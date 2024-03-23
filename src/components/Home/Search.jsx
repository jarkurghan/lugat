import React from "react";
import SearchIcon from "../../tools/svg-icons/Search";
import SearchService from "../../services/search";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const navigate = useNavigate();

    const onSearch = (e) => {
        e.preventDefault();
        navigate("/search");
        // console.log(e);
        // SearchService.getWords();
    };

    return (
        <form className="max-w-md" onSubmit={onSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon />
                </div>
                <input
                    // type="search"
                    id="default-search"
                    className="transition block w-full outline-none p-4 ps-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="So'zni kiriting"
                />
                <button
                    type="submit"
                    className="transition text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
