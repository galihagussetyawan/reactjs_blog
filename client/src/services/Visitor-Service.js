import Axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    createVisitor: async function (IPAddress, countryCode, countryName, city, state, os, page, postId) {
        return await Axios.post("http://localhost:5000/api/visitor", {
            IPAddress,
            countryCode,
            countryName,
            city,
            state,
            os,
            page,
            postId
        })
            .then(response => response)
            .catch(error => error.response);
    },

    createVisitorPost: async function (postId) {
        return await Axios.post("http://localhost:5000/api/visitor/post", {
            postId
        })
            .then(response => response)
            .catch(error => error)
    },

    updateVisitorPost: async function (postId) {
        return await Axios.put("http://localhost:5000/api/visitor/post", {
            postId
        })
            .then(response => response)
            .catch(error => error)
    },

    getAllVisitor: async function (size, page) {
        return await Axios.get("http://localhost:5000/api/visitor/all?size=" + size + "&page=" + page)
            .then(response => response)
            .catch(error => error)
    },

}