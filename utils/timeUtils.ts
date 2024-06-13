export const transFormMsToHours = (timeMs: number): number => {
  if (
    timeMs < 0 ||
    timeMs === null ||
    timeMs === undefined ||
    timeMs === Infinity ||
    Number.isNaN(timeMs)
  ) {
    return 0
  }
  return Math.floor(timeMs / (1000 * 60 * 60))
}

export const transformSecondToHours = (timeS: number) => {
  if (
    timeS < 0 ||
    timeS === null ||
    timeS === undefined ||
    timeS === Infinity ||
    Number.isNaN(timeS)
  ) {
    return 0
  }

  return Math.floor(timeS / (60 * 60))
}
