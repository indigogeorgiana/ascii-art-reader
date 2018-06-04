// const show = require('show.js')
const fs = require('fs')

function showComments () {
  fs.readFile('./data/comments.txt')
}

module.exports = showComments
