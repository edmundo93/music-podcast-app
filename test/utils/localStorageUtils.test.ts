import {
  setItem,
  getItem,
  removeItem,
  KEY_PREFIX,
} from '@/test/__mocks__/storage'

const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(global, 'localStorage', { value: localStorageMock })

describe('storage utility functions', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('setItem should store the value in localStorage with prefix', () => {
    const key = 'testKey'
    const value = { data: 'testData' }

    setItem(key, value)

    const storedValue = localStorage.getItem(KEY_PREFIX + key)
    expect(storedValue).toBe(JSON.stringify(value))
  })

  test('getItem should retrieve the value from localStorage with prefix', () => {
    const key = 'testKey'
    const value = { data: 'testData' }

    localStorage.setItem(KEY_PREFIX + key, JSON.stringify(value))

    const retrievedValue = getItem(key)
    expect(retrievedValue).toEqual(value)
  })

  test('getItem should return null if the key is not found', () => {
    const retrievedValue = getItem('nonExistentKey')
    expect(retrievedValue).toBeNull()
  })

  test('removeItem should remove the value from localStorage with prefix', () => {
    const key = 'testKey'
    const value = { data: 'testData' }

    localStorage.setItem(KEY_PREFIX + key, JSON.stringify(value))
    removeItem(key)

    const storedValue = localStorage.getItem(KEY_PREFIX + key)
    expect(storedValue).toBeNull()
  })

  test('setItem should handle storing non-object values', () => {
    const key = 'testKey'
    const value = 'testString'

    setItem(key, value)

    const storedValue = localStorage.getItem(KEY_PREFIX + key)
    expect(storedValue).toBe(JSON.stringify(value))
  })

  test('getItem should handle retrieving non-object values', () => {
    const key = 'testKey'
    const value = 'testString'

    localStorage.setItem(KEY_PREFIX + key, JSON.stringify(value))

    const retrievedValue = getItem(key)
    expect(retrievedValue).toBe(value)
  })
})
