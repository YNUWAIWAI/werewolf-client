import * as React from 'react'

interface Props {
  readonly children?: React.ReactNode
}

export default function MainContent(props: Props) {
  return (
    <div className="lo--main-content">
      {props.children}
    </div>
  )
}
