import getCookie from "../cookie/getCookie";
import setCookie from "../cookie/setCookie";
import { setResult, setWord } from "../store/word";
import axios from "./api";

const SearchService = {
    async getWords({ dispatch, word, args }) {
        try {
            if (word === "") return [];

            const searchParams = new URLSearchParams();
            searchParams.append("request", word);
            args.forEach((item) => searchParams.append("args", item));
            searchParams.toString();

            const { data } = await axios.get(`/search?${searchParams}`);
            dispatch(setResult(data));

            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getWord({ word, navigate, dispatch }) {
        const response = await axios.get(`/info/${word}`).catch((error) => {
            dispatch(setWord(word));
            navigate("/search");
            return error;
        });

        return response.data;
    },

    async wordViewCountIncrement({ word }) {
        try {
            const view = getCookie("wvc" + word);
            if (!view) {
                await axios.post("word/view", { word });
                setCookie("wvc" + word, true, 10);
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default SearchService;
