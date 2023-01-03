// Crear función que averigüe e imprima la extensión de un archivo

const getFileExt = (pathFile) => {
    return pathFile.split('.').pop()
}

let ext = getFileExt('./mdFiles/exampleFile.md')
    console.log(ext)
