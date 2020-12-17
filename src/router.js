import vueRouter from 'vue-router'
import Hotel from './components/Hotel'
import HotelD from './components/HotelD'
import Home from './components/Home'
import HotelAdd from './components/HotelAdd'
import HotelLogin from './components/HotelLogin'
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
            path: '/hotel/:hotelname',
            name: "hotel",
            component: Hotel
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
    ]
})
export default router