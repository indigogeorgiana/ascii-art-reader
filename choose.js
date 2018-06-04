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
  rl.question(a, (input) => {
    if (input === 'q') {
      rl.close()
    } else if (input === 'c') {
      rl.question(show('Enter comments:\n'), (inputCom) => {
        fs.writeFile('./data/comments.txt', inputCom, (err) => {
          if (err) throw err
          show('Saved')
          return pressEnter('Option: \n')
        })
      })
    } else if (Number(input) !== NaN) {
      getData(Number(input) - 1, (err, data) => {
        if (err) throw err
        show(data)
        return pressEnter('Menu = enter\nAnother picture = a number\n')
      })
    }
  })
}

// function enter () {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   rl.question(a, function (input) {
//     getData(Number(input) - 1, (err, data) => {
//       show(data)
//       // pressEnter('Menu = enter\nAnother picture = a number\n')
//     })
//   })
// }

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
