const fs = require('fs')
const show = require('./show.js')
const readline = require('readline')

function comment () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(show('Enter comments:\n'), (input) => {
    fs.writeFile('./data/comments.txt', input, (err) => {
      if (err) throw err
      show('Saved')
    })
  })
}

module.exports = comment
