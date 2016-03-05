let getImgUrls = (data, key) => {
  if (typeof key !== 'undefined' && key !== null) {
    data = data[key]
  }

  let url = data.urls.regular
  url = url.substr(0, url.indexOf('?'))
  let pieces = url.split('/')
  return pieces[pieces.length - 1].replace('photo-', '')
}

export default getImgUrls
