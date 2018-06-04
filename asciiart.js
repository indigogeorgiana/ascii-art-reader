module.exports = {
  listOfAscii,
  welcome,
  pressEnter,
  findIndex,
  listOfAsciiSync,
  writeComment
}
var fs = require('fs')

function welcome () {
  console.log('Welcome!')
  console.log('-------')
  console.log('       ')
  console.log('Choose an artwork to display, or:')
  console.log('`c`  to comment')
  console.log('`e`  to erase comments')
  console.log('`v`  to view comments')
  console.log('`q`  to quit')
  console.log('       ')
}

function listOfAscii () {
  var tmp
  fs.readdir('data', function (err, files) {
    if (err) {
      console.error("Couldn't read file:", err.message)
    } else {
      var tmpFile = files
      for (let i = 0; i < tmpFile.length; i++) {
        const tmpSeq = i + 1
        var tmpStr = tmpSeq + ': ' + tmpFile[i]
        console.log(tmpStr)
      }
      tmp = files
    }
  })
  return tmp
}

function listOfAsciiSync () {
  var tmp
  tmp = fs.readdirSync('data')
  for (let i = 0; i < tmp.length; i++) {
    const tmpSeq = i + 1
    var tmpStr = tmpSeq + ': ' + tmp[i]
    console.log(tmpStr)
  }
  console.log('       ')
}

function findIndex (choice) {
  const tmp = fs.readdirSync('data')
  return tmp[choice - 1]
}

function drawFunc (choice) {
  fs.readFile('data/' + findIndex(choice), 'utf8', (err, data) => {
    if (err) console.error("Couldn't read file:", err.message)
    console.log(data)
    console.log('Hit <enter> to continue...>')
  })
}

const readline2 = require('readline')

function writeComment (arg) {
  const rl = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Add comment > ', function (input) {
    rl.close()
    // Call any functions you like here. For example:
    fs.writeFileSync('fs.txt', input)
  })
}

const readline = require('readline')
function pressEnter (arg) {
  const rl = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('choice-- >  ', function (input) {
    rl.close()
    // Call any functions you like here. For example:
    switch (input.trim()) {
      case '1':
        drawFunc(1)
        break
      case '2':
        drawFunc(2)
        break
      case '3':
        drawFunc(3)
        break
      case '4':
        drawFunc(4)
        break
      case 'c':
        writeComment('c')
        break
      case 'q':
        console.log('Have a great day!')
        process.exit(0)
    }
  })
}


function pressCont () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Hit <enter> to continue...> ', function (input) {
    rl.close()
  })
}

welcome()
listOfAsciiSync()
pressEnter()
// pressCont()
