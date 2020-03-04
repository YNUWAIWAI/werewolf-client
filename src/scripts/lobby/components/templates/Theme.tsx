import * as React from 'react'

export interface StateProps {
  readonly theme: 'dark' | 'light'
}
export type Props = React.PropsWithChildren<StateProps>

export default function Theme(props: Props) {
  return (
    <div className={`lo ${props.theme}`}>
      {props.children}
    </div>
  )
}
