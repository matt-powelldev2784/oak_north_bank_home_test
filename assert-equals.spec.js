const assertEquals = require('./assert-equals')

describe('assertEquals simple tests', () => {
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })
  })

  describe('when expected and actual are different strings', () => {
    it('throws a error', () => {
      expect(() => assertEquals('abcef', 'abc')).toThrow()
    })
  })

  describe('when expected and actual are the same number', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1, 1)).not.toThrow()
    })
  })

  describe('when expected and actual are different numbers', () => {
    it('throws a error', () => {
      expect(() => assertEquals(1, 2)).toThrow()
    })
  })

  describe('when expected and actual are negative numbers', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(-1, -1)).not.toThrow()
    })
  })

  describe('when expected and actual are decimal numbers', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1.1, 1.1)).not.toThrow()
    })
  })

  describe('when expected and actual are the number 0', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(0, 0)).not.toThrow()
    })
  })

  describe('when expected and actual are different types', () => {
    it('throws a error', () => {
      expect(() => assertEquals(1, '2')).toThrow()
    })
  })

  describe('when expected and actual are the same array', () => {
    it('returns without throwing an error', () => {
      expect(() =>
        assertEquals([401, 404, 'cat'], [401, 404, 'cat'])
      ).not.toThrow()
    })
  })

  describe('when expected and actual are differnt arrays', () => {
    it('throws a error', () => {
      expect(() => assertEquals([401, 404, 500], [401, 404])).toThrow()
    })
  })
})
