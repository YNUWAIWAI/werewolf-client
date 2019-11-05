export const convertImageUrl = (url: string, size = '120x120') => {
  const re = /\d+x\d+/g

  return url.replace(re, size)
}
