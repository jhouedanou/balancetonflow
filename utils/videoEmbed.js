export function getEmbedUrl(url) {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = extractYoutubeId(url)
    return `https://www.youtube.com/embed/${videoId}`
  }
  if (url.includes('tiktok.com')) {
    return `https://www.tiktok.com/embed/${extractTiktokId(url)}`
  }
  if (url.includes('instagram.com')) {
    return `https://www.instagram.com/p/${extractInstagramId(url)}/embed`
  }
  return null
}

function extractYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

function extractTiktokId(url) {
  const match = url.match(/\/video\/(\d+)/)
  return match ? match[1] : null
}

function extractInstagramId(url) {
  const match = url.match(/\/p\/([^\/]+)/)
  return match ? match[1] : null
}
