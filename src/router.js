import Vue from "vue";
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Auth/Login'
import Registration from '@/pages/Auth/Registration'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'homePage'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/registration',
        component: Registration,
        name: 'registration'
    },
]

export default new Router({
    mode: "history",
    routes
})