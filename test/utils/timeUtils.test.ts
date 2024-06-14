import {
  formatMillisecons,
  transFormMsToHours,
  transformSecondToHours,
} from '@/utils/timeUtils'

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

describe('transformSecondToHours function', () => {
  it('should return 0 for negative values, null, undefined, Infinity, and NaN', () => {
    expect(transformSecondToHours(-1)).toEqual(0)
    expect(transformSecondToHours(Infinity)).toEqual(0)
    expect(transformSecondToHours(NaN)).toEqual(0)
  })

  it('should correctly convert seconds to hours', () => {
    expect(transformSecondToHours(3600)).toEqual(1) // 3600 seconds = 1 hour
    expect(transformSecondToHours(7200)).toEqual(2) // 7200 seconds = 2 hours
    expect(transformSecondToHours(3661)).toEqual(1) // 3661 seconds = 1 hour (ignores minutes and seconds)
  })
})

describe('formatMillisecons function', () => {
  it('should format milliseconds into HH:mm:ss format', () => {
    expect(formatMillisecons(0)).toEqual('00:00') // 0 milliseconds should be formatted as 00:00
    expect(formatMillisecons(1000)).toEqual('00:01') // 1000 milliseconds = 1 second = 00:01
    expect(formatMillisecons(61000)).toEqual('01:01') // 61000 milliseconds = 1 minute 1 second = 01:01
    expect(formatMillisecons(3661000)).toEqual('01:01:01') // 3661000 milliseconds = 1 hour 1 minute 1 second = 01:01:01
    expect(formatMillisecons(3600000)).toEqual('01:00:00') // 3600000 milliseconds = 1 hour = 01:00:00
  })

  it('should pad single digit minutes and seconds with leading zeros', () => {
    expect(formatMillisecons(61000)).toEqual('01:01')
    expect(formatMillisecons(60000)).toEqual('01:00') // 60000 milliseconds = 1 minute = 01:00
    expect(formatMillisecons(3601000)).toEqual('01:00:01') // 3601000 milliseconds = 1 hour 1 second = 01:00:01
    expect(formatMillisecons(3610000)).toEqual('01:00:10') // 3610000 milliseconds = 1 hour 10 seconds = 01:00:10
  })
})
