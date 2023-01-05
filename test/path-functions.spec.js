const path = require('path');
const pathFunctions = require('../path-functions')

// Test for existsPath function
describe('existsPath', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.existsPath).toBe('function')
  })

  it('should return true', () => {
    expect(pathFunctions.existsPath('./mdFiles/exampleFile.md')).toBe(true)
  })

})