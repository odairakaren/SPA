import { Router } from './router.js'

const router = new Router()
router.add('/', "/home.html")
router.add("/universe","/universe.html")
router.add("/exploration", "/exploration.html")

router.handle() 

window.onpopstate = () => router.handle()
window.route =() => router.route()