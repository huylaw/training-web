import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export default new VueX.Store({
    state: {
        layout: 'admin'
    },
    getters: {
        getLayout(state){
            return state.layout;
        }
    },
    mutations: {
        setLayout(state, payload){
            state.layout = payload;
        }
    },
    actions: {

    },
    modules: {}
})
