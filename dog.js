
const files = require('./files.js')
const commands = require('./commands.js')
const show = require('./show.js')
const pressEnter = require('./choose.js')

function welcome () {
  show('\n' + 'Welcome to Dog, Bram!' + '\n')
  menu()
}

function menu (a) {
  show(a)
  commands()
  show('\n')
  files()
  show('\n')
  pressEnter()
}

welcome()

module.exports = menu
