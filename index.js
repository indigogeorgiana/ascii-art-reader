const readline = require('readline')
const fs = require('fs')
const path = require('path')

function main () {
  print('Welcome!')
  print('--------')
  print('\n')
  const asciiNameArr = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']
  listFiles(asciiNameArr)
  userInput(asciiNameArr)
}

main()

function userInput (asciiNameArr) {
  const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  inputReader.question('Choice > ', (data) => {
    getData(asciiNameArr[Number(data) - 1], showData)
    inputReader.close()
  })
}

function listFiles (asciiNameArr) {
  for (let i = 0; i < asciiNameArr.length; i++) {
    print((i + 1) + ': ' + asciiNameArr[i])
  }
}

function print (printItem) {
  console.log(printItem)
}

function getData (file, cb) {
  const filepath = path.join(__dirname, '/data', file)
  fs.readFile(filepath, 'utf8', (err, data) => {
    cb(err, data)
  })
}

function showData (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}
