import createShowcase from './templates/showcase.js'

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

// jsonRequest({
//   url: 'https://api.unsplash.com/photos?client_id=' + CLIENT_ID,
//   callback: function(err, data) {
//     console.log(data);
//   }
// });

App.onLaunch = function(options) {
  // 1
  // var alert = createAlert('Hello World', 'desc'); //leaving 2nd parameter with an empty string
  var showcase = createShowcase()
  navigationDocument.presentModal(showcase);
}

// 2
var createAlert = function(title, description) {

  var alertString = '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<document>' +
      '<alertTemplate>' +
        '<title>' + title +'</title>' +
        '<description>' + description  + '</description>' +
      '</alertTemplate>' +
    '</document>'
    return parseTemplate(alertString)
}

function jsonRequest(options) {

  var url = options.url;
  var method = options.method || 'GET';
  var headers = options.headers || {} ;
  var body = options.body || '';
  var callback = options.callback || function(err, data) {
    console.error("options.callback was missing for this request");
  };

  if (!url) {
    throw 'loadURL requires a url argument';
  }

  var xhr = new XMLHttpRequest();
  // xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    try {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          callback(null, JSON.parse(xhr.responseText));
        } else {
          callback(new Error("Error [" + xhr.status + "] making http request: " + url));
        }
      }
    } catch (err) {
      console.error('Aborting request ' + url + '. Error: ' + err);
      xhr.abort();
      callback(new Error("Error making request to: " + url + " error: " + err));
    }
  };

  xhr.open(method, url, true);

  Object.keys(headers).forEach(function(key) {
    xhr.setRequestHeader(key, headers[key]);
  });

  xhr.send();

  return xhr;
}
