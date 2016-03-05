import parseTemplate from '../utils/parseTemplate.js'

let createShowcase = (photos) => {

  let parsedPhotos = (photos || []).map((photo) => {
    return `
      <lockup>
         <img src="${ photo }" width="453" height="255" />
      </lockup>
    `
  })

  let template = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
     <showcaseTemplate mode="showcase">
        <background>
           <img src="path to images on your server/Car_Movie_1920x1080.png" />
        </background>
        <banner>
           <title>Scenes</title>
           <row>
              <button>
                 <text>Slideshow</text>
              </button>
              <button>
                 <text>Screensaver</text>
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
