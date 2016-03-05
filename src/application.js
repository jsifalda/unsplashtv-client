import getImgUrls from './utils/getImgsUrls.js';

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

App.onLaunch = function(options) {
  var alert = createAlert('Hello World', 'desc'); //leaving 2nd parameter with an empty string
  navigationDocument.presentModal(alert);
}

var createAlert = function(title, description) {

  var alertString = '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<document>' +
      '<alertTemplate>' +
        '<title>' + title +'</title>' +
        '<description>' + description  + '</description>' +
      '</alertTemplate>' +
    '</document>'
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, 'application/xml');
    return alertDoc
}
