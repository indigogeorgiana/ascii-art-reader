const dog = require('../dog.js')

// test('The tests run ok', () => {
//   expect(true).toBeTruthy()
// })

test('Gives a welcome', () => {
  const expected = 'Welcome to Dog, Bram!'
  const actual = dog.welcome()
  expect(actual).toBe(expected)
})

