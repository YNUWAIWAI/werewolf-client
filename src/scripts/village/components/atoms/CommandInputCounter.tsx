/* global village */
import * as React from 'react'

interface Props {
  readonly inputChannel: village.InputChannel
  readonly postCount: number
  readonly postCountLimit: number
}

export default function CommandInputCounnter(props: Props) {
  switch (props.inputChannel) {
    case village.InputChannel.public:
    case village.InputChannel.limited:
      return (
        <span className="vi--command--input--counter">
          {`${props.postCount}/${props.postCountLimit}`}
        </span>
      )
    case village.InputChannel.grave:
    case village.InputChannel.postMortem:
    case village.InputChannel.private:
    default:
      return null
  }
}
