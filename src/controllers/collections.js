import createCollections from '../templates/collections.js'

export default (render) => {
  let collections = createCollections()
  render(collections)
}
