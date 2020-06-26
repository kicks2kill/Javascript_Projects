import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogPost: []
    },
    mutations: {
        newBlogPost(state, newPost) {
            state.blogPost.push(newPost);
        },
        updateBlogPost(state, blogPost) {
            state.blogPost = blogPost;
        }
    },
    actions: {
        async newBlogPost( { commit }, messageBody) {
            let blogPost = (await axios.post("http://localhost:3000/Home", {
                blogPost: messageBody
            })).data;
            commit('newBlogPost', blogPost.blogPost);
        },
        async getBlogPost({commit}) {
            let blogPost = (await axios.get("http://localhost:3000/Home")).data
            commit('updateBlogPost', blogPost);
        }
    },
});