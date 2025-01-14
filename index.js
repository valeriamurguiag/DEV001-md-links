const api = require('./src/api');
const optionsFunc = require('./src/optionsFunc')

const mdLinks = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    // Check if path exists
    if(api.existsPath(path)){
      // Turn path into absolute
      const absolutePath = api.turnAbsolute(path)
      // Check if path is a directory, read directory/or file, and get .md files
      const mdFilesArr = api.getMdFiles(absolutePath);
      if(mdFilesArr.length >= 1){
      // Read files and extract links
      const linksArr = optionsFunc.getLinks(absolutePath);
        if(linksArr.length >= 1 && options.validate) {
          resolve((optionsFunc.getStatus(linksArr)))
        } else if (linksArr.length >= 1 && options.validate != true){
          resolve((optionsFunc.getLinks(absolutePath)))
        } else if (linksArr.length == 0){
          reject(new Error ('No links found.'))
        }
      } 
    } 
  })
}

// mdLinks('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles')
// .then(response => console.log(response))
// .catch((error) => console.log(error));


module.exports = {
  mdLinks
};
