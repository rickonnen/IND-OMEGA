export interface VideoLinkPayload {
  videoUrl: string
}

export const MULTIMEDIA_RULES = {
  maxImages: 5,
  maxImageSizeMb: 5,
  allowedImageExtensions: ['jpg', 'jpeg', 'png'],
  maxVideos: 2,
  maxVideoSizeMb: 20,
  allowedVideoExtensions: ['mp4', 'mkv', 'avi'],
  allowedVideoHosts: ['youtube.com', 'www.youtube.com', 'youtu.be'],
}