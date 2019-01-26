/* global village */
import * as React from 'react'
import CommandInput from '../molecules/CommandInput'

export interface StateProps {
  readonly limited: {
    readonly available: boolean
    readonly postCount: number
    readonly postCountLimit: number
  }
  readonly public: {
    readonly postCount: number
    readonly postCountLimit: number
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
        {... props.public}
      />
      <CommandInput
        handlePostChat={props.handlePostChat(village.InputChannel.private)}
        inputChannel={village.InputChannel.private}
      />
      {
        props.limited.available ?
          <CommandInput
            handlePostChat={props.handlePostChat(village.InputChannel.limited)}
            inputChannel={village.InputChannel.limited}
            {... props.limited}
          /> :
          ''
      }
    </>
  )
}
