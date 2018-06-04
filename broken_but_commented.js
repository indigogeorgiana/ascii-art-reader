const readline = require('readline')
const fs = require('fs')
const path = require('path')

// the main function, houses everything we'll be running apart for the imported modules
function main () {
  const asciiNameArr = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']
  print('Welcome!')
  print('--------')
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
    print((i + 1) + ': ' + asciiNameArr[i])
  }
}
// generic print function. not sure if we should try make a print that accepts errors as well with it.
function print (printItem) {
  console.log(printItem)
}
// takes a file name, creates the path to it, uses a readfile that is determined by the callback (in this case it is showData)
function getData (file, cb) {
  const filepath = path.join(__dirname, '/data', file)
  fs.readFile(filepath, 'utf8', (err, data) => {
    cb(err, data)
  })
}
// similar to print function but it accepts errors, since for some reason the callbacks for file operations need it.
function showData (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}
// main menu print
function mainMenu (asciiNameArr) {
  print('\n')
  print('Choose an artwork to display, or:')
  print("'c' to comment")
  print("'e' to erase comments")
  print("'v' to view comments")
  print("'q' to quit")
  listFiles(asciiNameArr)
}
// function to take the user input, manipulate it, and send it to where it needs to go
function optionsFromInput (data, asciiNameArr) {
  getData(asciiNameArr[Number(data) - 1], showData)
}
