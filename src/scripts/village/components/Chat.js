// @flow
import ChatItem, {type Props as ChatItemProps} from './ChatItem'
import React from 'react'

export type StateProps = {
  +allIds: string[],
  +byId: {
    [string]: ChatItemProps
  }
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Chat(props: Props) {
  return (
    <div className="chat">
      {
        props.allIds.map(id =>
          <ChatItem
            key={id}
            {... props.byId[id]}
          />
        )
      }
    </div>
  )
}
