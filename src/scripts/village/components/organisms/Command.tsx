import * as React from 'react'

export interface StateProps {
  readonly content: React.ReactElement<any>,
  readonly hide: boolean
}
export interface OwnProps {}
export interface Props extends StateProps, OwnProps {}

export default function Command(props: Props) {
  return (
    <div className={`command ${props.hide ? 'hidden' : ''}`}>
      {props.content}
    </div>
  )
}
