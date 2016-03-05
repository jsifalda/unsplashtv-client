import request from './request.js'

let getImgUrls = (url, callback) => {
  request({ url: url }, (err, data) => {
    let result = data.map((obj) => {
      return obj.urls.regular;
    });

    callback(result);
  });
}

export default getImgUrls
