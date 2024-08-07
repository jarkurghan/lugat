import React, { useEffect } from "react";
import Search from "../components/Search/Result";
import Header from "../components/Search/Header";
import { getWord } from "../store/word";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const word = useSelector(getWord);
    const navigate = useNavigate();

    useEffect(() => {
        if (word === "") navigate("/");
    }, []);

    return (
        <div>
            <Header />
            <Search />
        </div>
    );
};

export default SearchPage;
