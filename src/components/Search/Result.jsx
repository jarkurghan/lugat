import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getArguments, getCount, getResult, getWord } from "../../store/word";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "./ResultItem";
import SearchNotFound from "./ResultNotFound";
import { endWait, getWait, startWait } from "../../store/waiting";
import { elementInViewport } from "../../events/elementInViewport";
import SearchService from "../../services/search";

function Search() {
    const results = useSelector(getResult);
    const spinner = useSelector(getWait);
    const word = useSelector(getWord);

    const [req, setReq] = useState(word);
    useEffect(() => {
        setReq(word);
    }, [results]);

    const dispatch = useDispatch();
    const args = useSelector(getArguments);
    const [page, setPage] = useState(1);
    const count = useSelector(getCount);

    const [next, setNext] = useState(false);
    const onSearch = async () => {
        return 0;
    };

    const onScroll = async () => {
        setNext(true);
    };

    useEffect(() => {
        (async () => {
            const element = document.getElementById("search-spin");
            if (next && element && elementInViewport(element)) {
                dispatch(startWait());
                await SearchService.getWords({ dispatch, word, args, page: page + 1, count, old: results });
                dispatch(endWait());
                setNext(false);
                onScroll();
                setPage(page + 1);
            }
        })();
    }, [next]);

    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onScroll);
    }, []);

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
            pages
        </div>
    );
}

export default Search;
