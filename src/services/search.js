import { setResult } from "../store/word";
import axios from "./api";

const SearchService = {
    async getWords({ dispatch, word, args }) {
        if (word === "") return [];

        const searchParams = new URLSearchParams();
        searchParams.append("request", word);
        args.forEach((item) => searchParams.append("args", item));
        searchParams.toString();

        const { data } = await axios.get(`/search?${searchParams}`);
        dispatch(setResult(data));

        return data;
    },
};

export default SearchService;
