const api = require('./src/api');
const optionsFunc = require('./src/optionsFunc')

const mdLinks = (path, options) => {
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
        if(linksArr.length >= 1) {
          // -------------------------------------------------------------- 
        }
      } else {
        reject(new Error ('No Markdown files found.'))
      }
    } else {
      reject(new Error ('Invalid path.'));
    }
  })
}

module.exports = () => {
  mdLinks
};
