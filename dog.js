const files = require('./files.js')
const commands = require('./commands.js')
const show = require('./show.js')
const pressEnter = require('./choose.js')

function menu (a) {
  show(a)
  commands()
  show('\n')
  files()
  show('\n')
  pressEnter('Option: ', (a) => {
  })
}

menu('\n' + 'Welcome to Dog, Bram!' + '\n')

module.exports = menu
