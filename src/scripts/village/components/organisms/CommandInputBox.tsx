/* global village */
import * as React from 'react'
import CommandInput from '../molecules/CommandInput'
import {State} from '../../reducers/suggest'

export interface StateProps {
  readonly characterLimit: number
  readonly language: village.Language
  readonly limited: {
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
        suggesttedData={props.suggesttedData}
      />
      {
        props.limited.available ?
          <CommandInput
            characterLimit={props.characterLimit}
            handlePostChat={props.handlePostChat(village.InputChannel.limited)}
            inputChannel={village.InputChannel.limited}
            language={props.language}
            postCount={props.limited.postCount}
            postCountLimit={props.postCountLimit}
            suggesttedData={props.suggesttedData}
          /> :
          null
      }
    </>
  )
}
