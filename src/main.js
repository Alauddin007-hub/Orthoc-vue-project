// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from "./components/Home.vue";
import Department from "./components/Departments.vue";
import AboutUs from "./components/AboutUs.vue";
import Doctors from "./components/Doctors.vue";
import Contact from "./components/ContactUs.vue";
import Testimonial from "./components/Testimonial.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/department', component: Department },
        { path: '/about', component: AboutUs },
        { path: '/doctor', component: Doctors },
        { path: '/contact', component: Contact },
        { path: '/testimonial', component: Testimonial },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')