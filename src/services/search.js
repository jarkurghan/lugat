import axios from "./api";

const SearchService = {
    async getWords() {
        const { data } = await axios.get("/search");
        return data;
    },
};

export default SearchService;
