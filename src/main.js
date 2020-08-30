import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import MainStore from "@/MainStore";
import Loading from "@/Loading";

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
    data: {
        show: false
    },
    render(h) {
        if (this.show) {
            return h(App);
        } else {
            return h(Loading);
        }
    },
    store: RootStore(),
    mounted() {
        const mainStore = MainStore();
        this.$store.registerModule('main', new Vuex.Store(mainStore));

        setTimeout(() => {
            this.show = true;
        })
    }
}).$mount('#app')

function RootStore() {
    return new Vuex.Store({
        state: {},
        getters: {},
        mutations: {},
        actions: {}
    });
}