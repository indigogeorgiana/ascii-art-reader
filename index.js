module.exports = {
  listFiles,

}

const util = require('./util.js')
const readline = require('readline')
const err = null
// the main function, houses everything we'll be running apart for the imported modules
function main () {
  const asciiNameArr = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']
  util.print('Welcome!')
  util.print('--------')
  mainMenu(asciiNameArr)
  userInput(asciiNameArr)
}

main()

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
function listFiles (asciiNameArr) {
  for (let i = 0; i < asciiNameArr.length; i++) {
    util.print((i + 1) + ': ' + asciiNameArr[i])
  }
}

// main menu print
function mainMenu (asciiNameArr) {
  util.print(err, '\n')
  util.print(err, 'Choose an artwork to display, or:')
  util.print(err, "'c' to comment")
  util.print(err, "'e' to erase comments")
  util.print(err, "'v' to view comments")
  util.print(err, "'q' to quit")
  listFiles(asciiNameArr)
}