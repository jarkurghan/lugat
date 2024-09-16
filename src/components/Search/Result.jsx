import React, { useEffect, useState } from "react";
import { getResult, getWord } from "../../store/word";
import { getWait } from "../../store/waiting";
import { getPages } from "../../store/word";
import { useSelector } from "react-redux";
import SearchNotFound from "./ResultNotFound";
import SearchItem from "./ResultItem";
import Pagination from "./Paginition";
import Navbar from "./Navbar";

function Search() {
    const results = useSelector(getResult);
    const spinner = useSelector(getWait);
    const pages = useSelector(getPages);
    const word = useSelector(getWord);

    const [req, setReq] = useState(word);
    useEffect(() => {
        setReq(word);
    }, [results]);

    return (
        <div className="max-w-5xl xl:max-w-4xl m-6 xl:ml-40">
            <Navbar />
            <div>
                {results.length > 0 && <div className="m-4 lowercase text-gray-500 text-[14px]">"{req}" bo'yicha qidiruv natijalari</div>}
                {results.map((e) => (
                    <SearchItem key={e.word} data={e} />
                ))}
                <div id="search-spin"></div>
            </div>
            {results.length === 0 && !spinner && <SearchNotFound />}
            {pages > 1 && (
                <div className="flex items-center gap-2">
                    <span>Sahifalar:</span> <Pagination />
                </div>
            )}
        </div>
    );
}

export default Search;
