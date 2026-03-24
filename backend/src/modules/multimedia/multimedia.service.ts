import { MULTIMEDIA_RULES } from './multimedia.schemas'

export const isValidYoutubeUrl = (videoUrl: string): boolean => {
  try {
    const parsedUrl = new URL(videoUrl.trim())
    const host = parsedUrl.hostname.toLowerCase()

    if (!MULTIMEDIA_RULES.allowedVideoHosts.includes(host)) {
      return false
    }

    if (host === 'youtu.be') {
      return parsedUrl.pathname.length > 1
    }

    if (host === 'youtube.com' || host === 'www.youtube.com') {
      return parsedUrl.searchParams.has('v') || parsedUrl.pathname.startsWith('/shorts/')
    }

    return false
  } catch {
    return false
  }
}