// @flow
import React from 'react'

export type Props = {
  +text: string
}

export default function ChatDelimeter(props: Props) {
  return (
    <div className="chat--delimeter">
      {props.text}
    </div>
  )
}
