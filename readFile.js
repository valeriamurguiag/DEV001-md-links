const { readFile } = require('fs');

const getText = (pathFile) => {
    return new Promise(function (resolve, reject){
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

getText('./mdFiles/exampleFile.md')
    .then((result) => console.log(result))
    .catch(error => console.log(error))





