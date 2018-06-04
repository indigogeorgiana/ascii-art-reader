
const util = require('./util.js')
const lib = require('./lib.js')

// the main function, houses everything we'll be running apart for the imported modules
function main () {
  const asciiNameArr = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']
  util.print(null, 'Welcome!')
  util.print(null, '--------')
  util.mainMenu(asciiNameArr, lib.listFiles)
  lib.userInput(asciiNameArr)

}

main()
