const fs = require('fs')
const readline = require('readline')
const path = require('path')
const options = require('./options')
const show = require('./show.js')
const menu = require('./dog.js')

function pressEnter (a) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Option: ', function (input) {
    // Call any functions you like here. For example:
    getData(Number(input) - 1, (err, data) => {
      rl.close()
      show(data)
      pressEnter()
    })
  })
}

function getData (input, cb) {
  const filepath = path.join(__dirname, options[input])
  fs.readFile(filepath, 'utf8', cb)
}
// function showData (err, data) {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(data)
//   }
// }

module.exports = pressEnter
