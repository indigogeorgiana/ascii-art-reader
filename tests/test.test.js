const index = require('../index.js')

test('test to see if the list of art gets displayed', () => {
  const fakePrint = jest.fn()
  const fakeNameArr = ['qwe', 'asd', 'zxc', 'rty']
  index.listFiles(fakeNameArr, fakePrint)
  expect(fakePrint.mock.calls[1][1]).toBe('2: asd')

})
