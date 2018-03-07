// @flow
import React from 'react'

const formatTime = time => {
  const minute = String(Math.floor(time / 60)).padStart(2, '0')
  const second = String(time % 60).padStart(2, '0')

  return `残り${minute}'${second}`
}

type Props = {
  id: string;
  time: number;
}

export default function FormattedTime(props: Props) {
  return (
    <span id={props.id}>
      {props.time < 0 ? '終了' : formatTime(props.time)}
    </span>
  )
}

