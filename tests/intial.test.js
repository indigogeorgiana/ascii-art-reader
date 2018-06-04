const testing = require('../asciiart')

test('add a simple inital test', () => {
  const expected = "'kea.txt', 'kiwi.txt', 'nikau.txt', 'photukawa.txt'"

  const actual = testing.listOfAscii()

  expect(actual).toBe(expected)
})
