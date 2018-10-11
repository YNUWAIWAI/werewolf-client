// @flow
import React from 'react'

type Props = {
  +children?: React$Node
}

export default function AsideContent(props: Props) {
  return (
    <div className="aside-content">
      {props.children}
    </div>
  )
}
