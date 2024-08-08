import React from "react";
import { useNavigate } from "react-router-dom";

function SearchItem({ data }) {
    const navigate = useNavigate();
    const gotoWord = () => navigate(`/word/${data.word}`);

    return (
        // max-h-24 max-h-12
        <div className="shadow-[0_4px_12px_0_#0d234308] px-[16px] py-[12px] rounded-[8px] mb-5 bg-white cursor-pointer" onClick={gotoWord}>
            <div className="text-justify line-clamp-3">
                <span>{data.word}</span> - <span className="text-sm">{data.definition}</span>
            </div>
        </div>
    );
}

export default SearchItem;
