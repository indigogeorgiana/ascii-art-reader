
module.exports = {

  pressEnter

}
const fs = require('fs')
const readline = require('readline')

// 1. Welcome

function welcome () {
  console.log('Welcome!')
}

console.log('\n q - quit \n c - comment \n v - view comments')

function exit (input) {
  if (input === 'q') {
    process.exit(1)
  }
}
//not working yetq

function comment (input) {
  if (input === 'c') {
    fs.writeFile('data/comments.txt', (err) => {
      if (err) throw err
      console.log('your comment has been saved')
    })
  }
}

// 3. List Ascii Art
function listOfArt () {
  const list = '\n 1.kea \n 2.kiwi \n 3.nikau \n 4.pohutukawa'
  console.log(list)
}

// 5. User interaction

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    display(input)
  })
}
//  4. Open ascii art file that corresponds with input

function display (input) {
  if (input === '1') {
    fs.readFile('data/kea.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('no file')
      } else {
        console.log(data)
      }
    })
    pressEnter()
  }
  if (input === '2') {
    fs.readFile('data/kiwi.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('no file')
      } else {
        console.log(data)
      }
    })
    pressEnter()
  }
  if (input === '3') {
    fs.readFile('data/nikau.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('no file')
      } else {
        console.log(data)
      }
    })
    pressEnter()
  }
  if (input === '4') {
    fs.readFile('data/pohutukawa.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('no file')
      } else {
        console.log(data)
      }
    })
    pressEnter()
  }
}

welcome()
display()
pressEnter()
listOfArt()
