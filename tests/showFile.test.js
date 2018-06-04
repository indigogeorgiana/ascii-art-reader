const index = require('../index.js')

test('showing correct files', () => {
  const data = 'kiwi.txt'
  const err = ''
  const expected = 'kiwi.txt'
  const actual = index.showFiles(err, data)
  expect(actual).toMatch(expected)
})
