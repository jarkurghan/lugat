import { setResult } from "../store/word";
import axios from "./api";

const SearchService = {
    async getWords(dispatch) {
        const { data } = await axios.get("/search");
        dispatch(setResult(data));
        return data;
    },
};

export default SearchService;
