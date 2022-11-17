import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ThreeJsScroll from './pages/scroll/ThreeJsScroll.vue'

const routes = [
    { path: '/playground/', component: Home },
    { path: '/playground/about', component: About },
    { path: '/playground/scroll', component: ThreeJsScroll },
]

export default routes;