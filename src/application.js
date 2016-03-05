import getImgUrls from './utils/getImgsUrls.js';

import createShowcase from './templates/showcase.js'
import createCollections from './templates/collections.js'
import collectionsController from './controllers/collections.js'
import createFullscreen from './templates/fullscreen.js';

let pushTemplate = (template) => {
  navigationDocument.presentModal(template)
}

App.onLaunch = function(options) {
  getImgUrls((photos) => {
    var showcase = createShowcase({
      photos,
      title: 'New images'
    })
    let collectionsButton = showcase.getElementById("collections")
    collectionsButton.addEventListener('select', () => {
      collectionsController(pushTemplate)
    });

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
            pushTemplate(showcase);
          });

          pushTemplate(fullscreen);
      });
    }

    pushTemplate(showcase)
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
