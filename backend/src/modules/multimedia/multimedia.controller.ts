import { Request, Response } from 'express'
import { isValidYoutubeUrl } from './multimedia.service'
import { MULTIMEDIA_RULES, VideoLinkPayload } from './multimedia.schemas'

export const getMultimediaRules = (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Multimedia rules loaded successfully',
    data: MULTIMEDIA_RULES,
  })
}

export const validateVideoLink = (req: Request, res: Response) => {
  const { videoUrl } = req.body as Partial<VideoLinkPayload>
  const normalizedVideoUrl = videoUrl?.trim()

  if (!normalizedVideoUrl) {
    return res.status(400).json({
      message: 'videoUrl is required',
    })
  }

  const isValid = isValidYoutubeUrl(normalizedVideoUrl)

  if (!isValid) {
    return res.status(400).json({
      message: 'Invalid YouTube video link',
    })
  }

  return res.status(200).json({
    message: 'Valid YouTube video link',
    data: {
      videoUrl: normalizedVideoUrl,
      provider: 'YouTube',
    },
  })
}