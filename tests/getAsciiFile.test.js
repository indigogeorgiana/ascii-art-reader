const index = require('../index.js')

test('getting all text file within a dir ', () => {
  const err = ''
  const cb = index.showFiles (err, data)
  const dir = 'data'
  const expected = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']
  const actual = index.getAsciiFiles(dir, cb)
  expect(actual).toMatch(expected)
})
