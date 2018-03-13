// @flow
import ChatItem, {type Props as ChatItemProps} from './ChatItem'
import React from 'react'

type Props = {
  items: Array<ChatItemProps>
}

export default function Chat({items}: Props) {
  return (
    <div className="chat">
      {
        items.map((item, index) =>
          <ChatItem
            key={index}
            {... item}
          />
        ).reverse()
      }
    </div>
  )
}
