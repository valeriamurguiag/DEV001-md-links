// Crear una función que imprima el contenido del archivo dado

const { readFile } = require('fs');

const getFile = (pathFile) => {
    return new Promise(function (resolve, reject){
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

getFile('./mdFiles/exampleFile.md')
    .then((result) => console.log(result))
    .catch(error => console.log(error));





