import getImgUrls from './utils/getImgsUrls.js';
import createShowcase from './templates/showcase.js';
import createFullscreen from './templates/fullscreen.js';

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

App.onLaunch = function(options) {
  // 1
  // var alert = createAlert('Hello World', 'desc'); //leaving 2nd parameter with an empty string
  getImgUrls('https://api.unsplash.com/photos?client_id=' + CLIENT_ID, (photos) => {
    var showcase = createShowcase({
      photos,
      title: 'test'
    });

    let collectionsButton = showcase.getElementById('collections')
    collectionsButton.addEventListener('select', () => {
      console.log('tap!!')
    })

    let showcasePhotos = showcase.getElementsByTagName('lockup');

    for(var i = 0; i < showcasePhotos.length; i++) {
      showcasePhotos.item(i).addEventListener('select', (e) => {
          let el = e.currentTarget;
          let imgs = el.getElementsByTagName('img');

          let photo;

          for(var i = 0; i < imgs.length; i++) {
            photo = imgs.item(i).getAttribute('src');
          }

          let fullscreen = createFullscreen(photo);
          let fullscreenPhoto = fullscreen.getElementById('photo');

          fullscreenPhoto.addEventListener('select', () => {
            navigationDocument.presentModal(showcase);
          });

          navigationDocument.presentModal(fullscreen);
      });
    }

    console.log('f', collectionsButton);
    navigationDocument.presentModal(showcase);
  })
}

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
