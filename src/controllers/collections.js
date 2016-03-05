import api from '../utils/api.js';
import createCollections from '../templates/collections.js'

export default (render) => {
  let template = createCollections()

  api({
    endpoint: '/collections',
    callback: (collections) => {
      console.log('co', collections)

      render(template)
    }
  })
}
