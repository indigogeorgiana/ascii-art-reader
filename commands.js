const show = require('./show.js')
const commands = [
  'Choose an artwork to display, or:',
  '"c" to comment',
  '"e" to erase comments',
  '"v" to view comments',
  '"q" to quit'
]

function showCommands () {
  for (let i = 0; i < commands.length; i++) {
    if (i < commands.length) {
      show((commands[i]))
    } else {
      return
    }
  }
}

module.exports = showCommands
