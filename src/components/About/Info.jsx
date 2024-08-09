import React from "react";

function Word() {
    return (
        <div className="max-w-6xl my-6 mx-auto px-2">
            <React.Fragment>
                <h1 className="text-2xl font-normal font-serif text-gray-700 dark:text-white uppercase mb-1">Ilova haqida</h1>
                <hr />
                <div className="mt-4 text-justify">
                    <span className="font-semibold">O'zbek tili lug'ati.</span>
                </div>

                <div className="mt-8 uppercase font-serif">Dastur haqida</div>
                <hr />
                <div className="mt-2 text-justify">
                    <span className="font-semibold">Dasturchi:</span> Najmiddin Nazirov
                </div>
                <div className="mt-2 text-justify">
                    <span className="font-semibold">Versiya:</span> v1.0.0
                </div>
            </React.Fragment>
        </div>
    );
}

export default Word;
