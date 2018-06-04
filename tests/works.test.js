// const dog = require('../dog.js')
const options = require('../options.js')

// test('The tests run ok', () => {
//   expect(true).toBeTruthy()
// })

// test('Gives a welcome', () => {
//   const expected = 'Welcome to Dog, Bram!'
//   const actual = dog.welcome()
//   expect(actual).toBe(expected)
// })

test('Is this an object', () => {
  const expected = 'object'
  const actual = typeof options
  expect(actual).toBe(expected)
})

test()