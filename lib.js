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
    util.getData(asciiNameArr[Number(data) - 1], util.print)
    inputReader.close()
  })
}

// takes the ascii art array and iterates over it, printing it out to the console with the number that represents it
function listFiles (asciiNameArr, print) {
  for (let i = 0; i < asciiNameArr.length; i++) {
    print(null, (i + 1) + ': ' + asciiNameArr[i])
  }
}
