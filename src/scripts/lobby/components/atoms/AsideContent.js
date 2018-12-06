// @flow
import React from 'react'

type Props = {
  +children?: React$Node,
  +expand?: boolean
}

export default function AsideContent(props: Props) {
  return (
    <div className={`aside-content ${props.expand ? 'expand' : ''}`}>
      {props.children}
    </div>
  )
}
