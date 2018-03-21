// @flow
import ChatItem, {type Props as ChatItemProps} from './ChatItem'
import React from 'react'

export type StateProps = {
  +items: Array<ChatItemProps>
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

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
