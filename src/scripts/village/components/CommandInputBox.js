// @flow
import React, {Fragment} from 'react'
import CommandInput from './CommandInput'

export type StateProps = {
  +limited: {
    +available: boolean,
    +postCount: number,
    +postCountLimit: number
  },
  +private: {
    +postCount: number,
    +postCountLimit: number
  },
  +public: {
    +postCount: number,
    +postCountLimit: number
  }
}
export type DispatchProps = {
  +handlePostChat: InputChannel => string => void
}
export type OwnProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function CommandInputBox(props: Props) {
  return (
    <Fragment>
      <CommandInput kind="public" {... props.public} handlePostChat={props.handlePostChat('public')} />
      <CommandInput kind="private" {... props.private} handlePostChat={props.handlePostChat('private')} />
      {
        props.limited.available ?
          <CommandInput kind="limited" {... props.limited} handlePostChat={props.handlePostChat('limited')} /> :
          ''
      }
    </Fragment>
  )
}
