// Vue
import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'

// Loader
import loader from "@/components/app/loader";

// Firebase
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

// Materialize
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', loader)

const firebaseConfig = {
  apiKey: "AIzaSyDhiUTZBerDH_aTlotjORzTIg53_nokFA0",
  authDomain: "my-web-docs.firebaseapp.com",
  databaseURL: "https://my-web-docs.firebaseio.com",
  projectId: "my-web-docs",
  storageBucket: "my-web-docs.appspot.com",
  messagingSenderId: "1024909500662",
  appId: "1:1024909500662:web:8baea1c33b7250abb28cd7",
  measurementId: "G-9FT3MRTEQ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})