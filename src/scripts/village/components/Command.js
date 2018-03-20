// @flow
import React from 'react'

export type StateProps = {
  +content: React$Element<*>,
  +hide: boolean
}
export type ownProps = {}
export type Props =
  & StateProps
  & ownProps

export default function Command(props: Props) {
  return (
    <div className={`command ${props.hide ? 'hide' : ''}`}>
      {props.content}
    </div>
  )
}
