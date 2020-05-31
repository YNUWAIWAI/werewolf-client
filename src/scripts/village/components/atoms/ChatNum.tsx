import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly id: village.Payload$ChatId
  readonly intensionalDisclosureRange: village.Channel
}

export const ChatNum: React.FC<Props> = props => (
  <div className="vi--chat--num">
    {
      props.intensionalDisclosureRange === village.Channel.public && props.id > 0 ?
        props.id :
        ''
    }
  </div>
)
ChatNum.displayName = 'ChatNum'
