'use client'

import { useEffect } from 'react'

import '@/app/globals.css'
import '@app-styles/components/button.css'

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    reset()
  }

  return (
    <div className="alert">
      <h2>{'Something went wrong'}</h2>
      <button onClick={onClick} className="errorBtn">
        {'Try again'}
      </button>
    </div>
  )
}

export default Error
