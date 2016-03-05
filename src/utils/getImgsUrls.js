import request from './request.js'

let getImgUrls = (url, callback) => {
  request({ url: url }, (err, data) => {
    let result = data.map((obj) => {
      let url = obj.urls.regular
      url = url.substr(0, url.indexOf('?'))
      let pieces = url.split('/')
      return pieces[pieces.length - 1].replace('photo-', '')
    });

    callback(result);
  });
}

export default getImgUrls
