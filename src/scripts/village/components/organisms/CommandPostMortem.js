// @flow
import type {InputChannel, NavigationType} from 'village'
import React, {Fragment} from 'react'
import CommandInput from '../molecules/CommandInput'
import CommandNavigation from '../../containers/CommandNavigationContainer'

export type DispatchProps = {
  +handlePostChat: InputChannel => string => void
}
export type StateProps = {
  +navigation: {
    +text: string,
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
        items={props.navigation}
      />
    </Fragment>
  )
}
