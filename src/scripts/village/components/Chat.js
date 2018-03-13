// @flow
import ChatItem from './ChatItem'
import React from 'react'
import type ChatItemProps from './ChatItem'
type Props = {
  items:
}

export default function Chat({items}) {
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
