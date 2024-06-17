import React from 'react'
import styles from '@app-components/ui/audio-player/audio-player.module.css'

interface IProps {
  src: string
  fullWidth?: boolean
}

const AudioPlayer = (props: IProps) => {
  return (
    <audio
      src={props.src}
      autoPlay
      controls
      className={props.fullWidth ? styles.fullWidth : ''}
    >
      Audio not supported
    </audio>
  )
}

export default AudioPlayer
