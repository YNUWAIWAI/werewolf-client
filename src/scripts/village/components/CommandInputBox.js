// @flow
import React, {Fragment} from 'react'
import CommandInput from './CommandInput'

export type StateProps = {
  +limited: {
    +available: boolean,
    +isSendable: boolean,
    +postCount: number,
    +postCountLimit: number
  },
  +private: {
    +isSendable: boolean,
    +postCount: number,
    +postCountLimit: number
  },
  +public: {
    +isSendable: boolean,
    +postCount: number,
    +postCountLimit: number
  }
}
export type DispatchProps = {
  +handlePostChat: InputChannel => string => void,
  +setIsSendable: InputChannel => boolean => void
}
export type ownProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & ownProps

export default function CommandInputBox(props: Props) {
  return (
    <Fragment>
      <CommandInput kind="public" {... props.public} handlePostChat={props.handlePostChat('public')} setIsSendable={props.setIsSendable('public')} />
      <CommandInput kind="private" {... props.private} handlePostChat={props.handlePostChat('private')} setIsSendable={props.setIsSendable('private')} />
      {
        props.limited.available ?
          <CommandInput kind="limited" {... props.limited} handlePostChat={props.handlePostChat('limited')} setIsSendable={props.setIsSendable('limited')} /> :
          ''
      }
    </Fragment>
  )
}
