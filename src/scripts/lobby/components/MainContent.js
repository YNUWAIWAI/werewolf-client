// @flow
import React from 'react'

type Props = {
  children?: React$Node
}

export default function MainContent(props: Props) {
  return (
    <div className="main-content">
      {props.children}
    </div>
  )
}
