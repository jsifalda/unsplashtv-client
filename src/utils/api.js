import request from './request.js'

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

export default ({endpoint, callback}) => {
  // 'https://api.unsplash.com/photos?client_id=' + CLIENT_ID,
  let url = 'https://api.unsplash.com' + endpoint + '?client_id=' + CLIENT_ID
  console.log('request', url)
  request({
    url
  }, callback)
}
