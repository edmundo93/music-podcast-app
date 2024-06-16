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

const pad = (num: number) => num.toString().padStart(2, '0')

export const formatMillisecons = (time: number) => {
  if (!time) {
    return ''
  }
  const ss = Math.floor(time / 1000)
  const mm = Math.floor(ss / 60)
  const hh = Math.floor(mm / 60)

  const sec = ss % 60
  const min = mm % 60

  return hh > 0
    ? `${pad(hh)}:${pad(min)}:${pad(sec)}`
    : `${pad(min)}:${pad(sec)}`
}

export const formatSeconds = (time: number) => {
  if (!time) {
    return ''
  }

  const mm = Math.floor(time / 60)
  const hh = Math.floor(mm / 60)

  const sec = time % 60
  const min = mm % 60

  return hh > 0
    ? `${pad(hh)}:${pad(min)}:${pad(sec)}`
    : `${pad(min)}:${pad(sec)}`
}
