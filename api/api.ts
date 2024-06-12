import { RequestInit } from 'next/dist/server/web/spec-extension/request'

export const apiFetch = (url: string, requestInit?: RequestInit) => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    requestInit
  )
}
