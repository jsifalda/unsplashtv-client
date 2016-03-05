import parseTemplate from '../utils/parseTemplate.js'

let createCollections = (collections) => {
  let parsedCollections = (collections || []).map((collection) => {
    return `<lockup>
       <img src="https://peaceful-dusk-20602.herokuapp.com/${ collection.photoId }.jpg" width="250" height="376" />
       <title>${ collection.title }</title>
    </lockup>`
  })

  console.log('parsed', parsedCollections)

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
                          ${ parsedCollections.join('') }
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
