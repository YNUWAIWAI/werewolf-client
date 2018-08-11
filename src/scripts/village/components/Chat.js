// @flow
import ChatDelimeter, {type Props as ChatDelimeterProps} from './ChatDelimeter'
import ChatItem, {type Props as ChatItemProps} from './ChatItem'
import React from 'react'

export type StateProps = {
  +allIds: string[],
  +byId: {
    [string]: (ChatDelimeterProps & {type: 'delimeter'}) | (ChatItemProps & {type: 'item'})
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
        props.allIds.map(id => {
          const item = props.byId[id]

          if (item.type === 'delimeter') {
            return (
              <ChatDelimeter
                key={id}
                {... item}
              />
            )
          }

          return (
            <ChatItem
              key={id}
              {... item}
            />
          )
        })
      }
    </div>
  )
}
