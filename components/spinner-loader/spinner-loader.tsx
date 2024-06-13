import React from 'react'

import './spinner-loader.css'

const SpinnerLoader = () => {
  return (
    <div className={'dot-spinner'}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  )
}

export default SpinnerLoader
