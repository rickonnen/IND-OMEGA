import { Router } from 'express'
import { getMultimediaRules, validateVideoLink } from './multimedia.controller'

const router = Router()

router.get('/rules', getMultimediaRules)
router.post('/video-link/validate', validateVideoLink)

export default router