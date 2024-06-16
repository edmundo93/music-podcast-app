export const KEY_PREFIX = 'podcast-app-'

export const setItem = (key: string, value: any): void => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string): any | null => {
  const storedValue = sessionStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : null
}

export const removeItem = (key: string): void => {
  sessionStorage.removeItem(key)
}
