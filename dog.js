// const path = require('./kiwi.txt')
const files = require('./files.js')
const commands = require('./commands.js')
const show = require('./show.js')
const pressEnter = require('./choose.js')

function welcome () {
  show('\n' + 'Welcome to Dog, Bram!' + '\n')
  commands()
  show('\n')
  files()
  show('\n')
  pressEnter()
}
welcome()

module.exports = {
  welcome
}
