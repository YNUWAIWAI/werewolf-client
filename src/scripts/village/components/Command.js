// @flow
import React from 'react'

export type StateProps = {
  +content: React$Element<*>,
  +hide: boolean
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Command(props: Props) {
  return (
    <div className={`command ${props.hide ? 'hidden' : ''}`}>
      {props.content}
    </div>
  )
}
