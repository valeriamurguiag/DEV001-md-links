const fs = require('fs');

fs.readFile('exampleFile.md', 'utf-8', (err, content) => {
    if (err){
        console.log(err);
    } else {
        console.log(content);
    }
})


// module.exports = {
//     : ,
// }