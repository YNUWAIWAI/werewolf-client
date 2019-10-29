import * as React from 'react'
import CommandNavigation, {Props as CommandNavigationProps} from '../molecules/CommandNavigation'
import CommandInput from '../molecules/CommandInput'
import {Navigation} from '../../constants/ActionTypes'
import {State} from '../../reducers/suggest'
import {village} from '../../types'

export interface StateProps {
  readonly language: village.Language
  readonly maxLengthOfUnicodeCodePoints: number
  readonly navigation: CommandNavigationProps['items']
  readonly suggesttedData: State['data']
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
        numberOfChatMessages={-1}
        suggesttedData={props.suggesttedData}
      />
      <CommandNavigation
        handleClick={props.handleNavigationClick}
        items={props.navigation}
      />
    </>
  )
}
