const allSystemsGo = require('../index')

test('allSystemsGo ', () => {
  expect(true).toBeTruthy()
})

test('welcome statment', () => {
  // arrange
  const expected = 'welcome'
  // act
  const actual = index.welcome
  // assert
  expect(actual).toBe(expected)
})
