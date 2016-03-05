import parseTemplate from '../utils/parseTemplate.js'

let createShowcase = ({photos, title}) => {

  let parsedPhotos = (photos || []).map((photo) => {
    return `
      <lockup>
         <img src="https://peaceful-dusk-20602.herokuapp.com/${ photo }.jpg" />
      </lockup>
    `
  })

  let template = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
     <showcaseTemplate mode="showcase">
        <background>
           <img src="${ Array.isArray(photos) ? photos[0] : '' }" />
        </background>
        <banner>
           <title>${ title }</title>
           <row>
              <button>
                 <text>New</text>
              </button>
              <button id="collections">
                 <text>Collections</text>
              </button>
           </row>
        </banner>
        <carousel>
           <section>
              ${ parsedPhotos.join('') }
           </section>
        </carousel>
     </showcaseTemplate>
  </document>
  `

  return parseTemplate(template)
}

export default createShowcase
