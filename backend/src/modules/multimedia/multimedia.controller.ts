import { Request, Response } from 'express'
import { isValidYoutubeUrl } from './multimedia.service'
import { MULTIMEDIA_RULES } from './multimedia.schemas'

export const getMultimediaRules = (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Multimedia rules loaded successfully',
    data: MULTIMEDIA_RULES,
  })
}

export const validateVideoLink = (req: Request, res: Response) => {
  const { videoUrl } = req.body as { videoUrl?: string }

  if (!videoUrl || typeof videoUrl !== 'string') {
    return res.status(400).json({
      message: 'videoUrl is required',
    })
  }

  const isValid = isValidYoutubeUrl(videoUrl)

  if (!isValid) {
    return res.status(400).json({
      message: 'Invalid YouTube video link',
    })
  }

  return res.status(200).json({
    message: 'Valid YouTube video link',
    data: {
      videoUrl,
      provider: 'YouTube',
    },
  })
}