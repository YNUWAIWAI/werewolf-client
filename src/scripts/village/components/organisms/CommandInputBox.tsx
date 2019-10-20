import * as React from 'react'
import * as village from '../../types'
import CommandInput from '../molecules/CommandInput'
import {State} from '../../reducers/suggest'

export interface StateProps {
  readonly characterLimit: number
  readonly language: village.Language
  readonly werewolf: {
    readonly available: boolean
    readonly postCount: number
  }
  readonly postCountLimit: number
  readonly public: {
    readonly postCount: number
  }
  readonly suggesttedData: State['data']
}
export interface DispatchProps {
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function CommandInputBox(props: Props) {
  return (
    <>
      <CommandInput
        characterLimit={props.characterLimit}
        handlePostChat={props.handlePostChat(village.InputChannel.public)}
        inputChannel={village.InputChannel.public}
        language={props.language}
        postCount={props.public.postCount}
        postCountLimit={props.postCountLimit}
        suggesttedData={props.suggesttedData}
      />
      <CommandInput
        characterLimit={props.characterLimit}
        handlePostChat={props.handlePostChat(village.InputChannel.private)}
        inputChannel={village.InputChannel.private}
        language={props.language}
        postCount={-1}
        postCountLimit={-1}
        suggesttedData={props.suggesttedData}
      />
      {
        props.werewolf.available ?
          <CommandInput
            characterLimit={props.characterLimit}
            handlePostChat={props.handlePostChat(village.InputChannel.werewolf)}
            inputChannel={village.InputChannel.werewolf}
            language={props.language}
            postCount={props.werewolf.postCount}
            postCountLimit={props.postCountLimit}
            suggesttedData={props.suggesttedData}
          /> :
          null
      }
    </>
  )
}
