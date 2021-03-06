import * as React from 'react'
import {CommandInput} from '../molecules/CommandInput'
import {State} from '../../reducers/suggest'
import {village} from '../../types'

export interface StateProps {
  readonly language: village.Language
  readonly maxLengthOfUnicodeCodePoints: number
  readonly maxNumberOfChatMessages: number
  readonly navigatable: boolean
  readonly public: {
    readonly numberOfChatMessages: number
  }
  readonly suggestedData: State['data']
  readonly werewolf: {
    readonly available: boolean
    readonly numberOfChatMessages: number
  }
}
export interface DispatchProps {
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export const CommandInputBox: React.FC<Props> = props => (
  <>
    <CommandInput
      handlePostChat={props.handlePostChat(village.InputChannel.public)}
      inputChannel={village.InputChannel.public}
      language={props.language}
      maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
      maxNumberOfChatMessages={props.maxNumberOfChatMessages}
      navigatable={props.navigatable}
      numberOfChatMessages={props.public.numberOfChatMessages}
      suggestedData={props.suggestedData}
    />
    <CommandInput
      handlePostChat={props.handlePostChat(village.InputChannel.private)}
      inputChannel={village.InputChannel.private}
      language={props.language}
      maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
      maxNumberOfChatMessages={-1}
      navigatable={props.navigatable}
      numberOfChatMessages={-1}
      suggestedData={props.suggestedData}
    />
    {
      props.werewolf.available ?
        <CommandInput
          handlePostChat={props.handlePostChat(village.InputChannel.werewolf)}
          inputChannel={village.InputChannel.werewolf}
          language={props.language}
          maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
          maxNumberOfChatMessages={props.maxNumberOfChatMessages}
          navigatable={props.navigatable}
          numberOfChatMessages={props.werewolf.numberOfChatMessages}
          suggestedData={props.suggestedData}
        /> :
        null
    }
  </>
)
CommandInputBox.displayName = 'CommandInputBox'
