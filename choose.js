const fs = require('fs')
const readline = require('readline')
const options = require('./binds.js')

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Option: ', function (input) {
    // rl.close()

    // Call any functions you like here. For example:
    //getData(input)
  })
}

function getData(file, cb) {
  const filepath = options[file].join(__dirname, file)
  fs.readFile(filepath, 'utf8', (err, data) => {
    cb(err, data)
  })
}

module.exports = pressEnter
