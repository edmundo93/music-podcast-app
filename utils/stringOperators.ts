export const matchVariables = (var1: string, var2: string): boolean => {
  if (!var1 || !var2) {
    return false
  }
  const sanitizedVar1 = sanitizeString(var1).toLowerCase()
  const sanitizedVar2 = sanitizeString(var2).toLowerCase()
  return sanitizedVar1.includes(sanitizedVar2)
}

export const sanitizeString = (variable: string): string => {
  return !variable ? '' : variable.replace(/[^a-zA-Z0-9\u00C0-\u017F ]/g, '')
}
