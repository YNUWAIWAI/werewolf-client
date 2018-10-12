// @flow
import type {InputChannel, NavigationType} from 'village'
import React, {Fragment} from 'react'
import CommandInput from '../molecules/CommandInput'
import CommandNavigation from '../molecules/CommandNavigation'

export type DispatchProps = {
  +handleNavigationClick: NavigationType => void => void,
  +handlePostChat: InputChannel => string => void
}
export type StateProps = {
  +navigation: {
    +id: string,
    +type: NavigationType
  }[]
}
type Props =
  & DispatchProps
  & StateProps

export default function CommandPostMortem(props: Props) {
  return (
    <Fragment>
      <CommandInput
        handlePostChat={props.handlePostChat('post mortem')}
        kind="post mortem"
      />
      <CommandNavigation
        handleClick={props.handleNavigationClick}
        items={props.navigation}
      />
    </Fragment>
  )
}
