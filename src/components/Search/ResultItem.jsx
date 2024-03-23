import React from "react";

function SearchItem({ data }) {
    return (
        // max-h-24 max-h-12
        <div className="shadow-[0_4px_12px_0_#0d234308] px-[16px] py-[12px] rounded-[16px] mb-5 bg-white">
            <div className="text-justify cursor-pointer line-clamp-3">
                <span>{data.word}</span> - <span className="text-sm">{data.definition}</span>
            </div>
        </div>
    );
}

export default SearchItem;
