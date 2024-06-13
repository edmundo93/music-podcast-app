import React from 'react'
import SpinnerLoader from '@/components/spinner-loader/spinner-loader'
import './globals.css'

const Loading = () => {
  return (
    <div className="loader">
      <SpinnerLoader />
    </div>
  )
}

export default Loading
