import { matchVariables, sanitizeString } from '@/utils/stringOperators'

describe('sanitizeString', () => {
  test('should return empty string if input is undefined', () => {
    expect(sanitizeString(undefined as unknown as string)).toBe('')
  })

  test('should return empty string if input is null', () => {
    expect(sanitizeString(null as unknown as string)).toBe('')
  })

  test('should remove special characters', () => {
    expect(sanitizeString('hello!')).toBe('hello')
    expect(sanitizeString('123@abc')).toBe('123abc')
    expect(sanitizeString('áéíóú')).toBe('áéíóú')
  })

  test('should preserve alphanumeric characters and spaces', () => {
    expect(sanitizeString('hello 123')).toBe('hello 123')
    expect(sanitizeString('áéí óú')).toBe('áéí óú')
  })
})

describe('matchVariables', () => {
  test('should return false if either variable is undefined', () => {
    expect(matchVariables(undefined as unknown as string, 'test')).toBe(false)
    expect(matchVariables('test', undefined as unknown as string)).toBe(false)
  })

  test('should return false if either variable is null', () => {
    expect(matchVariables(null as unknown as string, 'test')).toBe(false)
    expect(matchVariables('test', null as unknown as string)).toBe(false)
  })

  test('should return false if either variable is an empty string', () => {
    expect(matchVariables('', 'test')).toBe(false)
    expect(matchVariables('test', '')).toBe(false)
  })

  test('should match identical strings', () => {
    expect(matchVariables('hello', 'hello')).toBe(true)
  })

  test('should match substrings', () => {
    expect(matchVariables('hello world', 'world')).toBe(true)
  })

  test('should be case insensitive', () => {
    expect(matchVariables('HELLO', 'hello')).toBe(true)
    expect(matchVariables('Hello World', 'world')).toBe(true)
  })

  test('should ignore special characters', () => {
    expect(matchVariables('hello!', 'hello')).toBe(true)
    expect(matchVariables('hello@123', '123')).toBe(true)
  })

  test('should not match if sanitized strings do not include each other', () => {
    expect(matchVariables('hello', 'world')).toBe(false)
    expect(matchVariables('123abc', 'xyz')).toBe(false)
  })
})
