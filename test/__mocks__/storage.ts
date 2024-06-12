export const KEY_PREFIX = 'podcast-app-'

export const setItem = (key: string, value: any): void => {
  localStorage.setItem(KEY_PREFIX + key, JSON.stringify(value))
}

export const getItem = (key: string): any | null => {
  const storedValue = localStorage.getItem(KEY_PREFIX + key)
  return storedValue ? JSON.parse(storedValue) : null
}

export const removeItem = (key: string): void => {
  localStorage.removeItem(KEY_PREFIX + key)
}
