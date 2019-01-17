import * as React from 'react'
import CommandInput from '../molecules/CommandInput'

export interface StateProps {
  readonly limited: {
    readonly available: boolean
    readonly postCount: number
    readonly postCountLimit: number
  },
  readonly private: {
    readonly postCount: number
    readonly postCountLimit: number
  },
  readonly public: {
    readonly postCount: number
    readonly postCountLimit: number
  }
}
export interface DispatchProps {
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface OwnProps {}
export interface Props extends StateProps, DispatchProps, OwnProps {}

export default function CommandInputBox(props: Props) {
  return (
    <>
      <CommandInput
        inputChannel={village.InputChannel.public}
        {... props.public}
        handlePostChat={props.handlePostChat(village.InputChannel.public)}
      />
      <CommandInput
        inputChannel={village.InputChannel.private}
        {... props.private}
        handlePostChat={props.handlePostChat(village.InputChannel.private)}
      />
      {
        props.limited.available ?
          <CommandInput
            inputChannel={village.InputChannel.limited}
            {... props.limited}
            handlePostChat={props.handlePostChat(village.InputChannel.limited)}
          /> :
          ''
      }
    </>
  )
}
