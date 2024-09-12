import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArguments, getWord, setArguments } from "../../store/word";
import { endWait, startWait } from "../../store/waiting";
import { getCount, getPage } from "../../store/word";
import SearchService from "../../services/search";

function Navbar() {
    const dispatch = useDispatch();
    const word = useSelector(getWord);
    const args = useSelector(getArguments);
    const count = useSelector(getCount);
    const defcns = "shadow-md px-4 py-1 rounded-md border cursor-pointer bg-blue-200";
    const [cns, setcns] = useState({});

    useEffect(() => {
        const parts = ["word", "definition", "history", "synonym", "resource"];
        for (let i = 0; i < parts.length; i++)
            if (args.includes(parts[i])) cns[parts[i]] = defcns;
            else cns[parts[i]] = defcns.replaceAll(" bg-blue-200", "");
    }, []);

    const setActivePart = (part) => {
        let argums = [...args];

        if (argums.length === 1 && argums.includes(part)) return 0;
        // if (argums.length === 1 && argums.includes("word") && part === "word") return 0;

        if (argums.includes(part)) {
            cns[part] = cns[part].replaceAll(" bg-blue-200", "").replaceAll("bg-blue-200", "");
            argums.splice(argums.indexOf(part), 1);
            if (argums.length === 0) {
                cns.word = defcns;
                argums = ["word"];
            }
        } else {
            cns[part] += " bg-blue-200";
            argums.push(part);
        }

        setcns({ ...cns });
        dispatch(setArguments(argums));
    };

    const onSearch = async () => {
        dispatch(startWait());
        await SearchService.getWords({ dispatch, word, args, page: 1, count, old: [] });
        dispatch(endWait());
    };

    useEffect(() => {
        onSearch();
    }, [args]);

    return (
        <div className="no-copy hide-scroll flex items-baseline gap-4 mb-4">
            <div className={cns.word} onClick={() => setActivePart("word")}>
                so'z
            </div>
            <div className={cns.definition} onClick={() => setActivePart("definition")}>
                ta'rif
            </div>
            <div className={cns.history} onClick={() => setActivePart("history")}>
                kelib&nbsp;chiqish&nbsp;tarixi
            </div>
            <div className={cns.synonym} onClick={() => setActivePart("synonym")}>
                sinonim
            </div>
            <div className={cns.resource} onClick={() => setActivePart("resource")}>
                adabiy&nbsp;manbalarda
            </div>
        </div>
    );
}

export default Navbar;
