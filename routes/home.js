import Router from 'koa-router'
import home from '../controllers/home'

const router = Router()
router.get('/', home.index)
router.get('about', home.about)
export default router