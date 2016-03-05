let parseTemplate = (template) => {
  var parser = new DOMParser();
  var alertDoc = parser.parseFromString(template, 'application/xml');
  return alertDoc
}

export default parseTemplate
