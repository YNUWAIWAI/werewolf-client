import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly inputChannel: village.InputChannel
  readonly maxNumberOfChatMessages: number
  readonly numberOfChatMessages: number
}

export default function CommandInputPostCounnter(props: Props) {
  switch (props.inputChannel) {
    case village.InputChannel.public:
    case village.InputChannel.werewolf:
      return (
        <span className="vi--command--input--counter">
          {`${props.numberOfChatMessages}/${props.maxNumberOfChatMessages}`}
        </span>
      )
    case village.InputChannel.grave:
    case village.InputChannel.postMortem:
    case village.InputChannel.private:
    default:
      return null
  }
}
