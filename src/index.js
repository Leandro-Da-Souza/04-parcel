import Vue from 'vue';
import App from './components/App.vue';

// Vue.config.productionTip = false;
console.log('Environment variable demo ' + process.env.DEMO);
console.log('Environment variable demo ' + process.env.NODE_ENV);
new Vue({
    render: (h) => h(App),
}).$mount('#app');
