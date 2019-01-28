/* global village */
import * as React from 'react'
import CommandInput from '../molecules/CommandInput'
import CommandNavigation from '../molecules/CommandNavigation'
import {Navigation} from '../../constants/ActionTypes'

export interface StateProps {
  readonly navigation: {
    readonly id: string
    readonly type: Navigation
  }[]
}
export interface DispatchProps {
  readonly handleNavigationClick: (type: Navigation) => void
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function CommandPostMortem(props: Props) {
  return (
    <>
      <CommandInput
        handlePostChat={props.handlePostChat(village.InputChannel.postMortem)}
        inputChannel={village.InputChannel.postMortem}
      />
      <CommandNavigation
        handleClick={props.handleNavigationClick}
        items={props.navigation}
      />
    </>
  )
}
