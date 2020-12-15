import vueRouter from 'vue-router'
import Hotel from './components/Hotel'
import HotelD from './components/HotelD'
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
    ]
})
export default router