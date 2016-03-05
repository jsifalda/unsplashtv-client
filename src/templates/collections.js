import parseTemplate from '../utils/parseTemplate.js'

let createCollections = () => {
  let template = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
     <catalogTemplate>
        <banner>
           <title>Collections</title>
        </banner>
        <list>
           <section>
              <listItemLockup>
                 <title>All</title>
                 <decorationLabel>6</decorationLabel>
                 <relatedContent>
                    <grid>
                       <section>
                          <lockup>
                             <img src="path to images on your server/Car_Movie_250x375_A.png" width="250" height="376" />
                             <title>Movie 1</title>
                          </lockup>
                          <lockup>
                             <img src="path to images on your server/Car_Movie_250x375_B.png" width="250" height="376" />
                             <title>Movie 2</title>
                          </lockup>
                          <lockup>
                             <img src="path to images on your server/Car_Movie_250x375_C.png" width="250" height="376" />
                             <title>Movie 3</title>
                          </lockup>
                          <lockup>
                             <img src="path to images on your server/Car_Movie_250x375.png" width="250" height="376" />
                             <title>Movie 4</title>
                          </lockup>
                          <lockup>
                             <img src="path to images on your server/Car_Movie_250x375_C.png" width="250" height="376" />
                             <title>Movie 5</title>
                          </lockup>
                          <lockup>
                             <img src="path to images on your server/Car_Movie_250x375.png" width="250" height="376" />
                             <title>Movie 6</title>
                          </lockup>
                       </section>
                    </grid>
                 </relatedContent>
              </listItemLockup>
              <listItemLockup>
                 <title>Currated</title>
                 <decorationLabel>6</decorationLabel>
                 <relatedContent>
                    <grid>
                       <section>
                       </section>
                    </grid>
                  </relatedContent>
              </listItemLockup>
              <listItemLockup>
                 <title>Featured</title>
                 <decorationLabel>0</decorationLabel>
                 <relatedContent>
                    <grid>
                       <section>
                       </section>
                    </grid>
                  </relatedContent>
              </listItemLockup>
           </section>
        </list>
     </catalogTemplate>
  </document>
  `
  return parseTemplate(template)
}

export default createCollections
