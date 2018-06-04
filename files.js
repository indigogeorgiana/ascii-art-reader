const show = require('./show.js')

const files = [
  'dog.txt',
  'kea.txt',
  'kiwi.txt',
  'nikau.txt',
  'pohutukawa.txt'
]

function showFiles () {
  for (let i = 0; i < files.length; i++) {
    show(((i + 1) + ': ' + files[i]))
  }
}

module.exports = showFiles
