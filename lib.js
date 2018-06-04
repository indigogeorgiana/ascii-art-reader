module.exports = {
  userInput,
  listFiles
}
const readline = require('readline')
const util = require('./util.js')

// creates a terminal input reader for the user to enter their choice
function userInput (asciiNameArr) {
  const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  inputReader.question('Choice > ', (data) => {
    let filePath = util.getFilePath(asciiNameArr, data)
    util.getData(filePath, util.print)

    inputReader.close()
  })
}

// takes the ascii art array and iterates over it, printing it out to the console with the number that represents it
function listFiles (asciiNameArr, print) {
  for (let i = 0; i < asciiNameArr.length; i++) {
    print(null, (i + 1) + ': ' + asciiNameArr[i])
  }
}
