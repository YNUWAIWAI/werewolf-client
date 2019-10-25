import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly id: village.ChatId
  readonly intensionalDisclosureRange: village.Channel
}

export default function ChatNum(props: Props) {
  const id = Number(props.id)

  return (
    <div className="vi--chat--num">
      {
        props.intensionalDisclosureRange === village.Channel.public && id > 0 ?
          props.id :
          ''
      }
    </div>
  )
}
