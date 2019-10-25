import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly id: village.Payload$ChatId
  readonly intensionalDisclosureRange: village.Channel
}

export default function ChatNum(props: Props) {
  return (
    <div className="vi--chat--num">
      {
        props.intensionalDisclosureRange === village.Channel.public && props.id > 0 ?
          props.id :
          ''
      }
    </div>
  )
}
