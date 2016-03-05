import parseTemplate from '../utils/parseTemplate.js'

let createFullscreen = (photo) => {

  let template = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
     <oneupTemplate mode="oneup caption" allowsZooming="true">
        <section>
           <lockup id="photo">
              <img src="${ photo }" />
           </lockup>
        </section>
     </oneupTemplate>
  </document>`

  return parseTemplate(template)
}

export default createFullscreen
