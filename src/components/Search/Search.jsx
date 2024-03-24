import React from "react";
import SearchIcon from "../../tools/svg-icons/Search";
import SearchService from "../../services/search";
import { useDispatch, useSelector } from "react-redux";
import { endWait, startWait } from "../../store/waiting";
import { getWord, setWord } from "../../store/word";

const Search = () => {
    const dispatch = useDispatch();
    const word = useSelector(getWord);

    const changeWord = async (e) => {
        dispatch(setWord(e.target.value));
    };

    const onSearch = async (e) => {
        e.preventDefault();
        // console.log(e);

        dispatch(startWait());
        await SearchService.getWords({ dispatch, word });
        dispatch(endWait());
    };

    return (
        <form className="ml-40" onSubmit={onSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon />
                </div>
                <input
                    onChange={changeWord}
                    id="default-search"
                    className="transition block w-full outline-none p-2 ps-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="So'zni kiriting"
                />
                <button
                    type="submit"
                    className="transition text-white absolute end-2.5 bottom-[0.35em] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
