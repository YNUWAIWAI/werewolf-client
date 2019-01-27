import * as React from 'react'

export interface StateProps {
  readonly content: React.ReactElement<unknown>
  readonly hide: boolean
}
export type Props = StateProps

export default function Command(props: Props) {
  return (
    <div className={`command ${props.hide ? 'hidden' : ''}`}>
      {props.content}
    </div>
  )
}
