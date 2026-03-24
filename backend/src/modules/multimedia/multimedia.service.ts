import { MULTIMEDIA_RULES } from './multimedia.schemas'

export const isValidYoutubeUrl = (videoUrl: string): boolean => {
  try {
    const parsedUrl = new URL(videoUrl)
    const host = parsedUrl.hostname.toLowerCase()

    if (!MULTIMEDIA_RULES.allowedVideoHosts.includes(host)) {
      return false
    }

    if (host === 'youtu.be') {
      return parsedUrl.pathname.length > 1
    }

    if (host.includes('youtube.com')) {
      return parsedUrl.searchParams.has('v') || parsedUrl.pathname.startsWith('/shorts/')
    }

    return false
  } catch {
    return false
  }
}