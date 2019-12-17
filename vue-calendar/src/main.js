// Adi
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);
Vue.use(VueRouter);


const router = new VueRouter ({

routes: [
  {
    path: '/calendar',
    name: 'Calendar',
    component:() => import ('@/components/Calendar.vue'),
    
  },
  {
    path: '/',
    name: 'register',
    component: () => import ('@/components/Login.vue'),
  }

]
});

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAQxGltUQUv5zkq6BKHQCwTQ5XVPzou348",
  authDomain: "pracownia-a5a80.firebaseapp.com",
  databaseURL: "https://pracownia-a5a80.firebaseio.com",
  projectId: "pracownia-a5a80",
  storageBucket: "pracownia-a5a80.appspot.com",
  messagingSenderId: "67451820563",
  appId: "1:67451820563:web:f8d463e14220a4d5677de6"
});

export const db = firebase.firestore();


new Vue({
  vuetify,
  router,
  render: h => h(App),
  
}).$mount('#app')

