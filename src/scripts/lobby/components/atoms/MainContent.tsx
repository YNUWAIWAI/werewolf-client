import * as React from 'react'

export default function MainContent(props: React.PropsWithChildren<{}>) {
  return (
    <div className="lo--main-content">
      {props.children}
    </div>
  )
}
