import {createWebHistory, createRouter} from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import RegistrationForm from './components/RegistrationForm'
import Dashboard from './components/Dashboard.vue'
// import ShopNow from './components/ShopNow.vue'
import Home from './components/Home.vue'


const routes = [
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm
    },
    {
        path: '/RegistrationForm',
        name: 'RegistrationForm',
        component: RegistrationForm
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    // {
    //     path: '/shop',
    //     name: 'ShowNow',
    //     component: ShopNow
    // },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;