import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getArguments, getCount, getPages, getResult, getWord } from "../../store/word";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "./ResultItem";
import SearchNotFound from "./ResultNotFound";
import { endWait, getWait, startWait } from "../../store/waiting";
import { elementInViewport } from "../../events/elementInViewport";
import SearchService from "../../services/search";

function Pagination() {
    const [page, setPage] = useState(1);
    // const pages = useSelector(getPages);
    const pages = 10;
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        let arr = [];
        if (page > 3) {
            arr.push(1);
            arr.push(null);
            arr.push(page - 1);
        } else {
            if (page - 2 > 0) arr.push(page - 2);
            if (page - 1 > 0) arr.push(page - 1);
        }
        arr.push(page);
        if (page < pages - 2) {
            arr.push(page + 1);
            arr.push(null);
            arr.push(pages);
        } else {
            if (page < pages) arr.push(page + 1);
            if (page + 1 < pages) arr.push(page + 2);
        }
        setPageList(arr);
    }, [pages, page]);

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base cursor-pointer">
                    {page > 1 && (
                        <li>
                            <span
                                onClick={() => setPage(page - 1)}
                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </span>
                        </li>
                    )}
                    {pageList.map((e) =>
                        e ? (
                            <li>
                                <span
                                    style={e === page ? { backgroundColor: "rgb(191 219 254)" } : {}}
                                    onClick={() => setPage(e)}
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    {e}
                                </span>
                            </li>
                        ) : (
                            <li>
                                <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                    ...
                                </span>
                            </li>
                        )
                    )}
                    {page < pages && (
                        <li>
                            <span
                                onClick={() => setPage(page + 1)}
                                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </span>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
