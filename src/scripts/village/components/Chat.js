import ChatItem from './ChatItem'
import React from 'react'

export default function Chat({items}) {
  return (
    <div className="chat" id="chat">
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
