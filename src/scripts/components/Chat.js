import ChatItem from './ChatItem'
import React from 'react'

export default function Chat({items}) {
  return (
    <div id="chat" className="chat">
      {items.map((item, index) => <ChatItem key={index} {... item} />).reverse()}
    </div>
  )
}
