import * as React from 'react'
import CommandInput from '../molecules/CommandInput'
import {State} from '../../reducers/suggest'
import {village} from '../../types'

export interface StateProps {
  readonly language: village.Language
  readonly maxLengthOfUnicodeCodePoints: number
  readonly maxNumberOfChatMessages: number
  readonly public: {
    readonly numberOfChatMessages: number
  }
  readonly suggesttedData: State['data']
  readonly werewolf: {
    readonly available: boolean
    readonly numberOfChatMessages: number
  }
}
export interface DispatchProps {
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function CommandInputBox(props: Props) {
  return (
    <>
      <CommandInput
        handlePostChat={props.handlePostChat(village.InputChannel.public)}
        inputChannel={village.InputChannel.public}
        language={props.language}
        maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
        maxNumberOfChatMessages={props.maxNumberOfChatMessages}
        numberOfChatMessages={props.public.numberOfChatMessages}
        suggesttedData={props.suggesttedData}
      />
      <CommandInput
        handlePostChat={props.handlePostChat(village.InputChannel.private)}
        inputChannel={village.InputChannel.private}
        language={props.language}
        maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
        maxNumberOfChatMessages={-1}
        numberOfChatMessages={-1}
        suggesttedData={props.suggesttedData}
      />
      {
        props.werewolf.available ?
          <CommandInput
            handlePostChat={props.handlePostChat(village.InputChannel.werewolf)}
            inputChannel={village.InputChannel.werewolf}
            language={props.language}
            maxLengthOfUnicodeCodePoints={props.maxLengthOfUnicodeCodePoints}
            maxNumberOfChatMessages={props.maxNumberOfChatMessages}
            numberOfChatMessages={props.werewolf.numberOfChatMessages}
            suggesttedData={props.suggesttedData}
          /> :
          null
      }
    </>
  )
}
