import Axios from 'axios';

export default {

    getCategoryList: async function () {
        try {
            const response = await Axios.get("http://localhost:5000/api/category");
            return response;
        } catch (error) {
            throw error;
        }
    },
};