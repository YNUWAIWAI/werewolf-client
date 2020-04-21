import * as React from 'react'

interface Props {
  readonly expand?: boolean
}

export default function AsideContent(props: React.PropsWithChildren<Props>) {
  return (
    <div className={`lo--aside-content ${props.expand ? 'expand' : ''}`}>
      {props.children}
    </div>
  )
}
