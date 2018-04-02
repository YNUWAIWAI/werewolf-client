// @flow
import React from 'react'

type Props = {
  +text: string
}

export default function Header(props: Props) {
  return (
    <div className="header">
      {props.text}
    </div>
  )
}
