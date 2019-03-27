/* global village */
import * as React from 'react'
import CommandNavigation, {Props as CommandNavigationProps} from '../molecules/CommandNavigation'
import CommandInput from '../molecules/CommandInput'
import {Navigation} from '../../constants/ActionTypes'
import {State} from '../../reducers/suggest'

export interface StateProps {
  readonly characterLimit: number
  readonly language: village.Language
  readonly navigation: CommandNavigationProps['items']
  readonly suggestData: State['data']
}
export interface DispatchProps {
  readonly handleNavigationClick: (type: Navigation) => void
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function CommandGrave(props: Props) {
  return (
    <>
      <CommandInput
        characterLimit={props.characterLimit}
        handlePostChat={props.handlePostChat(village.InputChannel.grave)}
        inputChannel={village.InputChannel.grave}
        language={props.language}
        suggestData={props.suggestData}
      />
      <CommandNavigation
        handleClick={props.handleNavigationClick}
        items={props.navigation}
      />
    </>
  )
}
