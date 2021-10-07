import Axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    postContent: async function (title, content, id, selectedCategory) {

        return await Axios.post("http://localhost:5000/api/post/insert", {
            title,
            content,
            id,
            selectedCategory
        })
            .then(response => {
                return response;
            })
            .catch(error => error.response)

    },

    getContentAll: async function (limit) {
        return await Axios.get("http://localhost:5000/api/post/all?size=" + limit)
            .then(response => response)
            .catch(error => error);
    },

    getContent: async function (id) {
        return await Axios.get('http://localhost:5000/api/post/' + id)
            .then(response => {
                return response;
            })

            .catch(error => error)
    },

    getLatestPost: async function (limit) {
        return await Axios.get('http://localhost:5000/api/post/latest?size=' + limit)
            .then(response => response)
            .catch(error => error)
    },

    updatePost: async function (title, content, id, selectedCategory) {
        return await Axios.put("http://localhost:5000/api/post/" + id, {
            title,
            content,
            selectedCategory
        })
            .then(response => response)
            .catch(error => error);
    },

    getAllPostPage: async function (size, page) {
        return await Axios.get(`http://localhost:5000/api/test/post?size=${size}&page=${page}`)
            .then(response => response.data)
            .catch(error => error)
    },

    getPostByCategory: async function (id) {
        return await Axios.get(`http://localhost:5000/api/category/post?id=${id}`)
            .then(response => response.data)
            .catch(error => error);
    },

    getTrendingContent: async function () {
        return await Axios.get("http://localhost:5000/api/trending")
            .then(response => response.data)
            .catch(error => error)
    },

    //search
    getSearchPost: async function (search) {
        return await Axios.get(`http://localhost:5000/api/post?search=${search}`)
            .then(response => response)
            .catch(error => error)
    },

    //DELETE POST
    deletePost: async function (postId) {
        return await Axios.delete("http://localhost:5000/api/post/" + postId)
            .then(response => response)
            .catch(error => error);
    }

};