module.exports = {
  welcome,
  showFiles
}

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const getAsciiFiles = require('./getAsciiFiles')
const openAsciiFile = require('./openAsciiFile')

function welcome () {
  const message = 'Welcome to our page'
  console.log(message)
  return message
}

function showFiles (err, data) {
  if (err) {
    console.error(err)
  } else {
    for (let entry in data) {
      console.log(entry + ': ' + data[entry])
    }
  }
}

function showFile (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}

function userInput () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('What art would you like to look at? \n', (input) => {
    rl.close()
    // console.log(input)
    if (input === '0') {
      openAsciiFile('kea.txt', showFile)
    } else if (input === '1') {
      openAsciiFile('kiwi.txt', showFile)
    } else if (input === '2') {
      openAsciiFile('nikau.txt', showFile)
    } else if (input === '3') {
      openAsciiFile('pohutukawa.txt', showFile)
    }
    process.nextTick(() => {
      continueArt()
    })
  })
}

function continueArt () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Would you like to look at more art? y/n \n', (input) => {
    rl.close()
    if (input === 'y') {
      getAsciiFiles('data', showFiles)
      userInput()
    } else if (input === 'n') {
      process.exit()
    } else {
      console.log('Please press y for yes, n for no')
      continueArt()
    }
  })
}

getAsciiFiles('data', showFiles)
userInput()
