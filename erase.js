const fs = require('fs')
const show = require('./show.js')
const pressEnter = require('./choose.js')

function erase () {
  fs.writeFile('./data/comments.txt', '', (err) => {
    if (err) throw err
    show('Clean Slate')
  })
}

module.exports = erase
