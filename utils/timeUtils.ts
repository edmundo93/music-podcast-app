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
