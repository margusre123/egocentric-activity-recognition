import axios from "axios";

export const state = () => ({
    posts: []
})

export const getters = {
    getterposts: state => {
        return state.posts
    }
}

export const mutations = {
    createPostsMutation: (state, data) => state.posts.push(data),
    readPostsMutation: (state, data) => state.posts = data,
    updatePostsMutation: (state, data) => state.posts = data,
    deletePostsMutation: (state, data) => state.posts.splice(state.posts.indexOf(data), 1)
    //state.posts.splice(data.id - 1, 1),
}

export const actions = {

    createPosts({ commit }, post) {
        axios
            .post('http://localhost:8000/api/v1/latest-posts/', post)
            .then(response => { commit('createPostsMutation', response.data) })
            .catch(error => { console.log(error) })

    },

    readPosts({ commit }) {
        axios
            .get('http://localhost:8000/api/v1/latest-posts/')
            .then(response => { commit('readPostsMutation', response.data) })
            .catch(error => { console.log(error) })

    },

    updatePosts({ commit }) {
        axios
            .put('http://localhost:8000/api/v1/latest-posts/')
            .then(response => { commit('updatePostsMutation', response.data) })
            .catch(error => { console.log(error) })

    },

    deletePosts({ commit }, post) {

        console.log(post.id);
        // commit('deletePostsMutation', post);

        var data = {
            "id": post.id,
            "title": post.title,
            "content": post.content
        }

        console.log(data);


        axios
            .delete('http://localhost:8000/api/v1/latest-posts/', { data: data })
            .then(response => { commit('deletePostsMutation', data) })
            .catch(error => { console.log(error) })

    },





}