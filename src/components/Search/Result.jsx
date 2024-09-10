import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getResult, getWord } from "../../store/word";
import { useSelector } from "react-redux";
import SearchItem from "./ResultItem";
import SearchNotFound from "./ResultNotFound";
import { getWait } from "../../store/waiting";

function Search() {
    const results = useSelector(getResult);
    const spinner = useSelector(getWait);
    const word = useSelector(getWord);

    const [req, setReq] = useState(word);
    useEffect(() => {
        setReq(word)
    }, [results])

    return (
        <div className="max-w-5xl xl:max-w-4xl m-6 xl:ml-40">
            <Navbar />
            <div>
                {results.length > 0 && <div className="m-4 lowercase text-gray-500 text-[14px]">"{req}" bo'yicha qidiruv natijalari</div>}
                {results.map((e) => (
                    <SearchItem key={e.word} data={e} />
                ))}
            </div>
            {results.length === 0 && !spinner && <SearchNotFound />}
        </div>
    );
}

export default Search;
