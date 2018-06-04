module.exports = {
  getData,
  print
}
const fs = require('fs')
const path = require('path')
// takes a file name, creates the path to it, uses a readfile that is determined by the callback (in this case it is showData)
function getData (file, cb) {
  const filepath = path.join(__dirname, '/data', file)
  fs.readFile(filepath, 'utf8', (err, data) => {
    cb(err, data)
  })
}

// similar to print function but it accepts errors, since for some reason the callbacks for file operations need it.
function print (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}