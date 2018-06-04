const util = require('./util.js')

const readline = require('readline')
const err = null
// the main function, houses everything we'll be running apart for the imported modules
function main () {
  const asciiNameArr = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']
  print(err, 'Welcome!')
  print(err, '--------')
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
  inputReader.question('Choice > ', (data, asciiNameArr) => {
    if (data !== isNaN(Number(data))) { optionsFromInput(data, asciiNameArr) }
    if (data === 'q') { process.exit() }
    inputReader.close()
  })
}
// takes the ascii art array and iterates over it, printing it out to the console with the number that represents it
function listFiles (asciiNameArr) {
  for (let i = 0; i < asciiNameArr.length; i++) {
    print(err, (i + 1) + ': ' + asciiNameArr[i])
  }
}
// generic print function. not sure if we should try make a print that accepts errors as well with it.

// main menu print
function mainMenu (asciiNameArr) {
  print(err, '\n')
  print(err, 'Choose an artwork to display, or:')
  print(err, "'c' to comment")
  print(err, "'e' to erase comments")
  print(err, "'v' to view comments")
  print(err, "'q' to quit")
  listFiles(asciiNameArr)
}
// function to take the user input, manipulate it, and send it to where it needs to go
function optionsFromInput (data, asciiNameArr) {
  getData(asciiNameArr[Number(data) - 1], print)
}
