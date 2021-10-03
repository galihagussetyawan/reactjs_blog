import Axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getIPAddress: async function () {
        return await Axios.get("https://geolocation-db.com/json/")
            .then(response => response.data)
            .catch(error => error)
    }
}