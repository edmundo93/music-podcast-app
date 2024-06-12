import { transFormMsToHours } from '@/utils/timeUtils'

describe('transFormMsToHours', () => {
  test('should return 0 for 0 milliseconds', () => {
    const result = transFormMsToHours(0)
    expect(result).toBe(0)
  })

  test('should return 1 for 3600000 milliseconds (1 hour)', () => {
    const result = transFormMsToHours(3600000)
    expect(result).toBe(1)
  })

  test('should return 2 for 7200000 milliseconds (2 hours)', () => {
    const result = transFormMsToHours(7200000)
    expect(result).toBe(2)
  })

  test('should return 24 for 86400000 milliseconds (24 hours)', () => {
    const result = transFormMsToHours(86400000)
    expect(result).toBe(24)
  })

  test('should return 48 for 172800000 milliseconds (48 hours)', () => {
    const result = transFormMsToHours(172800000)
    expect(result).toBe(48)
  })

  test('should return 0 for negative values', () => {
    const result = transFormMsToHours(-1000)
    expect(result).toBe(0)
  })

  test('should return 0 for NaN values', () => {
    const result = transFormMsToHours(NaN)
    expect(result).toBe(0)
  })

  test('should return 0 for Infinity values', () => {
    const result = transFormMsToHours(Infinity)
    expect(result).toBe(0)
  })
})
