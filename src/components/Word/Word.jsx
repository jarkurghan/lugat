import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchService from "../../services/search";
import { endWait, getWait, startWait } from "../../store/waiting";

function Word() {
    const param = useParams();
    const dispatch = useDispatch();
    const spinner = useSelector(getWait);
    const [data, setData] = useState({});

    const getWordInfo = async () => {
        dispatch(startWait());
        const data = await SearchService.getWord({ word: param.word });
        setData(data);
        dispatch(endWait());
    };
    useEffect(() => {
        getWordInfo();
    }, []);

    return (
        <div className="max-w-6xl my-6 mx-auto px-2">
            {!spinner && (
                <React.Fragment>
                    <h1 className="text-2xl font-normal font-serif text-gray-700 dark:text-white uppercase mb-1">{param.word}</h1>
                    <hr />
                    {data?.definition?.definition && (
                        <div className="mt-4 text-justify">
                            <span className="font-semibold">Ta'rif.</span> {data.definition.definition}
                        </div>
                    )}
                    {data?.history?.history && (
                        <div className="mt-4 text-justify">
                            <span className="font-semibold">Kelib chiqish tarixi.</span> {data.history.history}
                        </div>
                    )}
                    {data?.example?.phrase && (
                        <div className="mt-4 text-justify">
                            <span className="font-semibold">Adabiy manbalardan.</span> {data.example.phrase}
                            <div>{data.example.phrase && `📚 ${data.example.resource_name} (${data.example.page}${"-bet"})`}</div>
                        </div>
                    )}

                    {data?.synonyms?.length > 0 && (
                        <div className="mt-4 text-justify">
                            <span className="font-semibold">Sinonimlar.</span>{" "}
                            {data.synonyms.map((e, i) => (
                                <span>
                                    {e.word}
                                    {i !== data.synonyms.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-8 uppercase font-serif">Morfologiya</div>
                    <hr />
                    <div className="mt-2 text-justify">
                        <span className="font-semibold">Til.</span> {data.language}
                    </div>
                    <div className="mt-2 text-justify">
                        <span className="font-semibold">So'z turkumi.</span> {data.word_type}
                    </div>

                    <div className="mt-8 uppercase font-serif">Qo'shimcha ma'lumotlar</div>
                    <hr />
                    <div className="mt-2 text-justify">
                        <span className="font-semibold">Avtor.</span> {data.first_name} {data.last_name}
                    </div>
                    {/* <div className="mt-2 text-justify">
                        <span className="font-semibold">Ko'rishlar soni.</span> {data.view.count}
                    </div> */}
                </React.Fragment>
            )}
        </div>
    );
}

export default Word;
