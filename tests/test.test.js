const lib = require('../lib.js')

jest.mock('../util.js', (done) => {
  return {
    getData: (file, cb) => {
      cb(null, 'gasdfasdf')
      expect(file).toBe('adfgsadfg')
      done()
    }
  }
})

test('test to see if the list of art gets displayed', (done) => {
  const fakePrint = jest.fn()
  const fakeNameArr = ['qwe', 'asd', 'zxc', 'rty']
  lib.listFiles(fakeNameArr, fakePrint)
  expect(fakePrint.mock.calls[1][1]).toBe('2: asd')
  done()
})

test('test to make sure picture prints', () => {
  const showMock = jest.fn()
  showFileContents('test.file', showMock)

  const length = showMock.mock.calls.length
  expect(length).toBe(1)
})