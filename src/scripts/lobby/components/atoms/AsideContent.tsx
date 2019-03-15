import * as React from 'react'

interface Props {
  readonly children?: React.ReactNode
  readonly expand?: boolean
}

export default function AsideContent(props: Props) {
  return (
    <div className={`lo--aside-content ${props.expand ? 'expand' : ''}`}>
      {props.children}
    </div>
  )
}
