// @flow
import React from 'react'

export type Props = {
  text: string
}

export default function IdSearchBox(props: Props) {
  return (
    <div className="id-search">
      {props.text}
    </div>
  )
}
