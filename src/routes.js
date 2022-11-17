import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ThreeJsScroll from './pages/scroll/ThreeJsScroll.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/scroll', component: ThreeJsScroll },
]

export default routes;