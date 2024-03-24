import { setResult } from "../store/word";
import axios from "./api";

const SearchService = {
    async getWords({ dispatch, word }) {
        const searchParams = new URLSearchParams();
        searchParams.append("request", word);
        searchParams.toString();

        const { data } = await axios.get(`/search?${searchParams}`);
        dispatch(setResult(data));
        return data;
    },
};

export default SearchService;
