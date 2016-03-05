import api from '../utils/api.js';
import getImgUrls from '../utils/getImgsUrls.js'
import createCollections from '../templates/collections.js'
import assign from 'object-assign'
export default (render) => {
  api({
    endpoint: '/collections',
    callback: (err, collections) => {

      collections = collections.map((collection) => {
        return assign({}, collection, {
          photoId: getImgUrls(collection, 'cover_photo')
        })
      })

      let template = createCollections(collections)
      render(template)
    }
  })
}
