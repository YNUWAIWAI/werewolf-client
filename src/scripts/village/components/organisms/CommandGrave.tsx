import * as React from 'react'
import CommandNavigation, {Props as CommandNavigationProps} from '../molecules/CommandNavigation'
import CommandInput from '../molecules/CommandInput'
import {Navigation} from '../../constants/ActionTypes'
import {State} from '../../reducers/suggest'
import {village} from '../../types'

export interface StateProps {
  readonly language: village.Language
  readonly maxLengthOfUnicodeCodePoints: number
  readonly navigatable: boolean
  readonly navigation: CommandNavigationProps['items']
  readonly suggestedData: State['data']
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
        handlePostChat={props.handlePostChat(village.InputChannel.grave)}
        inputChannel={village.InputChannel.grave}
        language={props.language}
        maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
        maxNumberOfChatMessages={-1}
        navigatable={props.navigatable}
        numberOfChatMessages={-1}
        suggestedData={props.suggestedData}
      />
      <CommandNavigation
        handleClick={props.handleNavigationClick}
        items={props.navigation}
        navigatable={props.navigatable}
      />
    </>
  )
}
