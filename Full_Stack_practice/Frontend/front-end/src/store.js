import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogs: [],
        users: []
    },
    mutations : {
        getPosts(state, blogs) {
            state.blogs = blogs;
        },
        getUsers(state,users) {
            state.name = users;
        }
    },

    actions: {
        async getBlogs({ commit }) {
            let blogs = (await axios.get('http://localhost:3000/')).data
            commit('getPosts',blogs);
        },
        async getUsers({ commit }) {
            let users = (await axios.get('http://localhost:3000/')).data 
            commit('getUsers', users);
        }
    }
})