import vueRouter from 'vue-router'
import HotelD from './components/HotelD'
import Home from './components/Home'
import HotelAdd from './components/HotelAdd'
import HotelLogin from './components/HotelLogin'
import HotelNotLogin from './components/HotelNotLogin'
import HotelClose from './components/HotelClose'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/hotel/description/:hotelname',
            name: "hotel_description",
            component: HotelD
        },
        {
            path: '/home',
            name: "home",
            component: Home
        },
        {
            path: '/hotel/add',
            name: "hotel_add",
            component: HotelAdd
        },
        {
            path: '/hotel/login',
            name: "hotel_login",
            component: HotelLogin
        },
        {
            path: '/hotel/notlogin',
            name: "hotel_not_login",
            component: HotelNotLogin
        },
        {
            path: '/hotel/loginClose',
            name: "hotel_login_close",
            component: HotelClose
        },
    ]
})
export default router